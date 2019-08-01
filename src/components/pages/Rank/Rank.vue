<template>
    <div class="rank wrapper">
        <ul class="ulist content">
            <li v-for="(group,index) in list" :key="index" class="out">
                <img v-lazy="group.picUrl" alt="" width='100' height='100'>

                <div>
                   <ol class="olist">
                       <li v-for="(item,index) in group.songList" :key="index" class="inner">
                               {{index+1}}&nbsp;{{item.songname}}-{{item.singername}}  
                       </li>
                   </ol>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Data from "data/rank.js"
import BScroll from 'better-scroll'
export default {
   name:"Recommend" ,
   data(){
       return {
           list:[],
       }
   },
   methods:{
       normalData(data){
        //    data.songList.push[1,2,3]
           this.list = data
       }
   },
   created(){
       setTimeout(()=>{
           let data=Data.data.topList
            this.normalData(data)
           
           console.log(data)
           setTimeout(()=>{
            this.scroll = new BScroll('.rank') //this值得是当前vue
           },20)
       },500)
   }
}
</script>
<style lang="less" scope>
@import '~style/index.less';
.rank{
    position:fixed;
    width:100%;
    .top(88);
    .bottom(0);
    overflow:hidden;
    .ulist{
        list-style:none;
        .out{
            display:flex;
            .margin(0,20,0,20);
            .padding(20,0,0,0);
            font-size:@font-size-s;
            color: hsla(0,0%,100%,.3);
            img{
                .w(100);
                .h(100);
               
            }
            .olist{
                display:flex;
                flex-direction: column;
                justify-content: center;
                .padding(0,20,0,20);
                .h(100);
                .w(182);
                background:@bg-first;
                list-style:none;
                li{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    line-height: 26px;
                    .w(182);
                     font-family:PingFang SC,STHeitiSC-Light,Helvetica-Light,arial,sans-serif;
                }
            }
        }
    }
}
</style>