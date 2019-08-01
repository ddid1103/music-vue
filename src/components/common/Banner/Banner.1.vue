<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgList" :key="index">
                    <img :src="item" alt="">
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
            imgList:["http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1197436.jpg",
                "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1196887.jpg",
                "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1197435.jpg",
                "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1197616.jpg",
                "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1197246.jpg"
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
    mounted(){
        this.initBanner();
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


