<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <Banner></Banner>
            <h4>热门歌单推荐</h4>
            <ul class="recoList">
                <li v-for="(item,index) in list" :key=index>
                    <div class="icon">
                        <img v-lazy="item.imgurl" alt="">
                    </div>
                    <div class="text">
                        <p class="name">{{item.creator.name}}</p>
                        <p class="diss">{{item.dissname}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Banner from "../../common/Banner/Banner"
import BScroll from 'better-scroll'
export default {
   name:"Recommend",
   components:{
       Banner,
   },
   data(){
       return {
           list:[]
       }
   },
   created(){
       let url="/hehe/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.6091887908322935"
       this.$axios.get(url)
            .then((res)=>{
                //console.log(res)
                this.list = res.data.list
            })
            .catch((err)=>{
                console.log(err)
            })

   },
   mounted(){ 
        // let wrapper = document.querySelector('.wrapper')
        // let scroll = new BScroll(wrapper)
        let elobj=this.$refs.wrapper
        new BScroll(elobj)
   },
   destroyed(){
       console.log("销毁了")
   },
   activated(){
       console.log("进入缓存页面")
   },
   deactivated(){
       console.log("离开缓存页面")
   }
}
</script>
<style lang="less" scope>
@import "~style/index.less";
.wrapper{
    position:fixed;
    .bottom(0);
    .top(88);
    .left(0);
    .right(0);
    overflow:hidden;
    h4{
        color:@font-color-header;
        font-size:@font-size-m;
        text-align:center;
        .padding(15,0,15,0);
    }
    .recoList{
        li{
            display:flex;
            .padding(0,15,16,20);
            .icon{
                .padding(0,20,0,0);
                img{
                    .h(60);
                    .w(60);
                } 
            }
            .text{
                font-size:@font-size-ms;
                .name{
                    .padding(10,0,10,0);
                    color:@font-color-item;    
                }
                .diss{
                    color:@font-color-tab;
                }
            }
        }
    }

}

</style>

