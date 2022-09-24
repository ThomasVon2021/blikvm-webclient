<template>
    <div class="mouse-dom-holder">

    </div>
</template>
<script>
import { RateLimitedMouse } from "@/lib/mouse.js";
import Config from '@/config.js';

export default {
    data(){
        return {
            ws:null,
            rateLimitedMouse:null,
        };
    },
    methods:{
        initWs(){
            this.ws = new WebSocket(`ws://${Config.mouse_host}:80`);

            this.ws.onopen = this.onWsOpen;
            this.ws.onmessage = this.onWsMessage;
            this.ws.onclose = this.onWsClose;
        },
        onWsOpen(evt){

        },
        onWsMessage(evt){

        },
        onWsClose(evt){

        },
        _addScreenEventListeners(screenElement) {

            screenElement.addEventListener("mousemove", (evt) => {

                evt.preventDefault();

                this.rateLimitedMouse.onMouseMove(evt);
            });
            screenElement.addEventListener("mousedown", (evt) => {
                this.rateLimitedMouse.onMouseDown(evt);
            });
            screenElement.addEventListener("mouseup", (evt) => {
                this.rateLimitedMouse.onMouseUp(evt);
            });
            screenElement.addEventListener("wheel", (evt) => {
                evt.preventDefault();
                this.rateLimitedMouse.onWheel(evt);
            });



            screenElement.addEventListener("contextmenu", (evt) => {
                evt.preventDefault();
            });
        }
    },
    created() {
        this.initWs();
        this.rateLimitedMouse = new RateLimitedMouse(
            100,
            (mouseEvent) => {
                this.ws.send(JSON.stringify({m:mouseEvent}));

            }
        );
    },
    mounted() {
        let screenEl = document.getElementById("webrtc-output");
        this._addScreenEventListeners(screenEl);
    }
}
</script>
<style>

</style>
