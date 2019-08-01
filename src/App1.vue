<template>
  <div id="app">
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import Music from "common/Music/Music.vue"
export default {
  name: 'App',
  components:{
    
  }
}
</script>

<style lang="less" scope>
@import "~style/index.less";
div{
  background:@bg-color;
}

</style>
