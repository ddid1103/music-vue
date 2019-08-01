<template>
  <div id="music">
      <m-header></m-header>
      <Tab></Tab>
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import MHeader from "common/m-header/m-header.vue"
import Tab from "common/Tab/Tab.vue"
export default {
  name: 'music',
  components:{
    MHeader,
    Tab,
  }
}
</script>

<style lang="less" scope>
@import "~style/index.less";
div{
  background:@bg-color;
}

</style>


