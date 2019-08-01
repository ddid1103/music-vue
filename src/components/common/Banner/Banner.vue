<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgList" :key="index">
                    <img :src="item.picUrl" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper"
export default {
    name:"Banner",
    data(){
        return {
            imgList:[
            ]
        }
    },
    methods:{
        initBanner(){
                var mySwiper = new Swiper ('.swiper-container', {
                loop: true, 
                autoplay:true
            })
        }
    },
    created(){
        let url='/xixi/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1552007611622&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1'
        this.$axios.get(url)
            .then((res)=>{
                this.imgList = res.data.slider
                console.log(res)
                this.$nextTick(()=>{
                 this.initBanner();
                })
            })
            .catch((err)=>{
                console.log(err)
            })
            
    },
    mounted(){
       
    }
}
</script>
<style lang="less" scope>
@import url("../../../../node_modules/swiper/dist/css/swiper.min.css");
@import "~style/index.less";
    .banner{
        .w(375);
        .h(150);
        background:#fff;
        img{
            .w(375);
            .h(150);
        }
    }
</style>


