<template>
  <div id="app">
      <LeftMenu></LeftMenu>
      <Video></Video>
      <Mouse></Mouse>
      <Keyboard ref="keyboard"></Keyboard>
  </div>
</template>

<script>
import LeftMenu from "./components/left";
import Keyboard from "./components/keyboard";
import Video from './components/video'
import Mouse from './components/mouse';

export default {
  name: 'App',
  components: {
      Keyboard,
      LeftMenu,
      Video,
      Mouse
  },
    methods:{

    }
}
</script>

<style>
html,body{
    /*background: #e21616;*/
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
    width: 100%;
    height: 100vh;
  background-image: url("./assets/bg.svg");
    background-size: 100%;

}
</style>
