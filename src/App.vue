<template>
  <div id="app">
      <m-header></m-header>
      <Tab></Tab>
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
      <player></player>
  </div>
</template>

<script>
import MHeader from "common/m-header/m-header.vue"
import Tab from "common/Tab/Tab.vue"
import player from "common/player/player.vue"
export default {
  name: 'App',
  components:{
    MHeader,
    Tab,
    player
  }
}
</script>

<style lang="less" scope>
@import "~style/index.less";
#app{
  background:@bg-color;
}

</style>


