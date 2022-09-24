<template>
    <div id="leftmenu">
        <Badge text="Beta">
            <div class="logo" @click="showVersion">BLIKVM</div>
        </Badge>
        <div class="bottom-menu">
            <img v-if="!fan_running" @click="sendFanCommand(127)" src="@/assets/fan_off.svg" alt="fan status" style="width: 38px;cursor: pointer;display: block;margin: 10px auto">
            <img v-else @click="sendFanCommand(0)" src="@/assets/fan_on.svg" alt="fan status" style="width: 38px;cursor: pointer;display: block;margin: 10px auto">

            <img v-if="!hdd_led" src="@/assets/hdd_off.svg" alt="hdd status" style="width: 30px;cursor: not-allowed;display: block;margin: 10px auto">
            <img v-else src="@/assets/hdd_on.svg" alt="hdd status" style="width: 30px;cursor: not-allowed;display: block;margin: 10px auto">

            <img v-if="power_led===-1" @click="showAtxWarning" src="@/assets/power_off.svg" alt="power status" style="width: 34px;cursor: not-allowed;display: block;margin: 10px auto">
            <img v-else-if="power_led===0" @click="sendATXCommand(128)" src="@/assets/power_off.svg" alt="power status" style="width: 34px;cursor: pointer;display: block;margin: 10px auto">
            <img v-else @click="sendATXCommand(192)" src="@/assets/power_on.svg" alt="power status" style="width: 34px;cursor: pointer;display: block;margin: 10px auto">

            <img src="@/assets/reset.svg" @click="sendResetCommand" alt="reset button" style="width: 20px;cursor: pointer;display: block;margin: 16px auto">

            <img @click="toggleKeyboard" src="@/assets/keyboard_icon.svg" style="width: 32px;cursor: pointer;display: block;margin: 10px auto">
            <img @click="toggleFullScreen" src="@/assets/full_screen_icon.svg" style="width: 30px;cursor: pointer;display: block;margin: 10px auto">
        </div>

    </div>
</template>
<script>
import screenfull from 'screenfull';
import Config from "@/config";
export default {
    data(){
        return {
            version:Config.version,
            build:Config.build,
            fan_running:false,
            fan_speed:0,
            hdd_led:false,
            power_led:-1,
            ws:null
        }
    },
    methods:{
        initWs(){
            this.ws = new WebSocket(`ws://${Config.extension_host}:80`);
            this.ws.onopen = this.onWsOpen;
            this.ws.onmessage = this.onWsMessage;
            this.ws.onclose = this.onWsClose;
        },
        onWsOpen(evt){
            this.ws.send(JSON.stringify({ext:'request'}));
        },
        onWsMessage(evt){
            let data = JSON.parse(evt.data);
            this.fan_running = data.fan_running || false;
            this.fan_speed = data.fan_speed || 0;
            this.hdd_led = data.hdd_led || false;
            this.power_led = data.power_led ===undefined ? -1 : data.power_led;
        },
        onWsClose(evt){

        },

        sendFanCommand(speed){
            this.ws.send(JSON.stringify({fan:speed}));
        },
        sendATXCommand(cmd){
            this.ws.send(JSON.stringify({atx:cmd}));
        },
        sendResetCommand(){
            this.$Modal.confirm({
                title:'Danger',
                content:'Your device will be reset, sure ?',
                onOk:()=>{
                    this.sendATXCommand(8);
                }
            });
        },
        showAtxWarning(){
            this.$Message.warning({
                content:'ATX not connected'
            });
        },
        toggleKeyboard(){
            this.$store.commit('toggle_virtual_keyboard');
        },
        toggleFullScreen(){
            screenfull.toggle();
        },
        showVersion(){
            this.$Modal.info({
                title:'Version',
                content:`<p>Version:${this.version}</p><p>Build:${this.build}</p>`
            });
        }
    },
    created() {
        this.initWs();
    }
}
</script>
<style>
#leftmenu {
    background: rgba(252, 251, 251, 0.55);
    width: 80px;
    height: 100vh;
    padding: 14px;
    display: inline-block;
    float: left;

}
.bottom-menu {
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 60px;
}
.logo {
    padding-top: 4px;
}
</style>
