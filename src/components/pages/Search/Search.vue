<template>
    <div>
     这里是搜索   
    </div>
</template>
<script>

import jsonp from '@/common/js/jsonp.js'
import { Toast } from 'mint-ui'
//import { Indicator } from 'mint-ui';
export default {
   name:"Recommend",
   activated(){
      Toast('欢迎进入搜索页面')
    //   Indicator.open('加载中...')
   },
    created(){
    
    }
}
</script>
<style lang="less" scope>

</style>