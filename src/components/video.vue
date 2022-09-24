<template>
    <div id="videocontainer" :style="{maxWidth:video_container_width,maxHeight:video_container_height}">
        <video id="webrtc-output" autoplay playsinline muted :style="{maxWidth:video_container_width,maxHeight:video_container_height}"></video>
    </div>
</template>
<script>
import lodash from 'lodash';
import adapter from 'webrtc-adapter';
import Janus from "@/lib/janus";
import Config from '@/config.js';

export default {
    data(){
        return {
            video_container_width:'70%',
            video_container_height:'auto',
            is_video_loaded:false,
        };
    },
    computed:{
        virtual_keyboard_shown(){
            return this.$store.state.display_virtual_keyboard;
        }
    },
    created() {
        window.addEventListener('resize', this.onPageResize, true);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onPageResize, true);
    },
    mounted() {
        this.$nextTick(()=>{
            this.initVideo();
        });
    },
    methods:{
        initVideo(){
            var _this = this;
            var desp = {};
            desp.adapter = adapter;
            Janus.init({
                debug: false,
                dependencies: Janus.useDefaultDependencies(desp),
            });
            const janus = new Janus({
                server: `ws://${Config.video_host}:8188/`,
                success: attachUStreamerPlugin,
                error: console.error,
            });
            let uStreamerPluginHandle = null;
            function attachUStreamerPlugin() {
                janus.attach({
                    plugin: "janus.plugin.ustreamer",
                    success: function (pluginHandle) {
                        uStreamerPluginHandle = pluginHandle;
                        uStreamerPluginHandle.send({ message: { request: "watch" } });
                    },
                    error: console.error,
                    onmessage: function (msg, jsepOffer) {
                        if (msg.error_code === 503) {
                            uStreamerPluginHandle.send({ message: { request: "watch" } });
                            return;
                        }
                        if (jsepOffer) {
                            uStreamerPluginHandle.createAnswer({
                                jsep: jsepOffer,
                                media: { audioSend: false, videoSend: false },
                                success: function (jsepAnswer) {
                                    uStreamerPluginHandle.send({
                                        message: { request: "start" },
                                        jsep: jsepAnswer,
                                    });
                                    _this.onVideoLoaded();
                                },
                                error: console.error,
                            });
                        }
                    },
                    onremotetrack: function (mediaStreamTrack, mediaId, isAdded) {
                        if (isAdded) {
                            const videoElement = document.getElementById("webrtc-output");
                            const stream = new MediaStream();
                            stream.addTrack(mediaStreamTrack.clone());
                            videoElement.srcObject = stream;
                        }
                    },
                });
            }
        },
        onVideoLoaded(){
            this.is_video_loaded = true;
            this.initVideoElementSize();
        },
        onPageResize: lodash.debounce(function () {
            if(this.is_video_loaded){
                this.initVideoElementSize();
            }
        },300),
        initVideoElementSize(){

            let max_video_width  = document.body.clientWidth - 100;
            this.video_container_width = max_video_width + 'px';

            let kw = document.getElementById('svgkeyboard-container').clientWidth;
            let kh = document.getElementById('svgkeyboard-container').clientHeight;
            let max_h = document.body.clientHeight -kh -30;
            if(kh<1)
                max_h +=10;
            this.video_container_height = max_h + 'px';
        }
    },
    watch:{
        virtual_keyboard_shown(new_val,old_val){
            this.$nextTick(()=>{
                if(this.is_video_loaded){
                    this.initVideoElementSize();
                }
            });
        }
    }
}
</script>
<style>
#videocontainer {
    display: inline-block;
    margin: 10px 0 0 10px;
}
video {
    height: 100%;
    width: 100%;
    object-fit: contain;
}
</style>
