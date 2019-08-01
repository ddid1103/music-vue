<template>
    <div class='player' v-if='songList.length' ref='goback'>
        <div v-show='show' class='normalScreen'>
            <div class='bg'>
                 <img :src="currentSong.imgUrl" alt="">
            </div>
            <div class="top">
                <span @click='goback'>返回</span>
               <p class="pname">{{currentSong.songname}}</p> 
                <p class="sname">{{currentSong.name}}</p> 
            </div>
            <div class='cd-wrapper'>
                <div class='cd' >
                    <img :src="currentSong.imgUrl" alt="">
                </div>
            </div>
            <p class='txt'>{{lyric[nowLine].txt}}</p>
            <!-- <p>{{lyric}}</p>
            <p>{{nowLine}}</p> -->
            <div class='control'>
                <audio :src='currentSong.sonUrl' 
                canplay='' 
                ref='audio'
                @timeupdate='update'
                ></audio>
                <p class='btn'>
                    <button @touchstart='playMusic'>playMusic</button>
                    <button @touchstart='changeIndex("next")'>next</button>
                    <button @touchstart='changeIndex("prev")'>prev</button>
                    <button @touchstart='changeIndex("sj")'>random</button>
                </p>
                
                <!-- <mt-progress :value="20" :bar-height="5"></mt-progress> -->
                <mt-progress :value="start/end" :bar-height="10">
                    <div slot="start">{{nowDate}}</div>
                    <!-- <div slot="end">{{parseInt(currentSong.interval/60)+"分"+currentSong.interval%60+"秒"}}</div> -->
                    <div slot="end">{{getTime}}</div>
                </mt-progress>
                <div></div>
            </div>
        </div> 
        <div v-show='!show'>
            小的播放器
        </div>
        
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
import {Base64} from 'js-base64'
import Vue from 'vue'
//引入 lyric-parser 
import Lyric from 'lyric-parser'

// import { Progress } from 'mint-ui'
//Vue.component(Progress.name, Progress);

export default {
    name:'player',

    data(){
        return {
            show:true,
            nowDate:0,
            nowLine:0,//当前行数
            lyric:[{txt:"..."}],
            start:0,
            end:0
        }
    },
    watch:{
        currentSong(newSong,oldSong){
           // console.log('watch')
           //console.log(newSong)
            let url = `/haha/music/api/lyric?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&songmid=${newSong.songmid}&platform=yqq&hostUin=0&needNewCode=0&categoryId=10000000&pcachetime=1552396704762`
            this.$axios.get(url)
            .then((data)=>{
                let text = Base64.decode(data.lyric)
                this.lyricobj = new Lyric(text,(data)=>{
                    //console.log(data)
                    this.nowLine = data.lineNum
                })
                this.lyric = this.lyricobj.lines
                //console.log(lyricobj)
              
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    methods:{
        goback(){
        //    console.log(this.$refs.goback)
        //    this.$refs.goback.style.display = 'none'
        this.songList.length = 0
       
        //this.songList.splice(0,this.songList.length)
        // console.log(this.songList)
        },
        update(e){
           this.nowDate = ((e.srcElement.currentTime)/100).toFixed(2)
           this.start = parseInt(e.srcElement.currentTime)*100
           //console.log(this.start)
        },
        ...mapMutations(['changeIndex']),
        playMusic(){
            let audio = this.$refs.audio;
            if( audio.paused ){
                audio.play()
                this.lyricobj.play()
            }else{
                audio.pause()
                this.lyricobj.stop()
            }
           // console.log(audio.paused);
            
        }
    },
    computed:{
        ...mapState({
            songList:state=>state.play.songList,
            nowIndex:state=>state.play.nowIndex
            }),
        ...mapGetters(['currentSong']),
           getTime(){
            let time = parseInt(this.currentSong.interval/60)+"分"+(this.currentSong.interval%60)+"秒"
            this.end = this.currentSong.interval
            return time
        }
      
    },
    created(){
      console.log(this.$store);
    },
    mounted(){
       
    }
}
</script>
<style lang='less' scope>
@import '~style/index.less';
.player{
    .w(375);
    position:fixed;
    .top(0);
    .bottom(0);
    background:@bg-color;
    font-size:@font-size-ms;
    .normalScreen{
        .bg{
            position:absolute;
            .top(0);
            .bottom(0);
            width:100%;
            z-index:-1;
            img{
                width:100%;
                height:100%;
                opacity:.6;
                filter:blur(20px);
                
            }
        }
        .top{
            position:relative;
            span{
                display:block;
                .w(30);
                .h(30);
                position:absolute;
                .left(20);
                .top(15);
                color:#fff;
            }
            p{
                text-align:center;
                color:#fff;
            }
            .pname{
                font-size:18px;
                .h(40);
                .l_h(40);
            }
            .sname{
                font-size:@font-size-ms;
                .h(20);
                .l_h(20);
            }
        }
        .btn{
            .h(26);
            display:flex;
            .margin(0,0,30,0);
            button{
                background:none;
                border:0;
                font-size:18px;
                flex:1;  
            }
        }
        .txt{
            color:#fff;
            .h(26);
            font-size:@font-size-l;
            .l_h(26);
            text-align: center;
            .margin(0,0,42,0);
        }
        .cd-wrapper{
            .w(375);
            .h(375);
            display:flex;
            justify-content: center;
            align-items: center;
            .cd{
                height:80%;
                width:80%;
                border-radius:50%;
                border: 10px solid hsla(0,0%,100%,.1);
            
                img{
                    width:100%;
                    height:100%;
                    border-radius:50%;
                   
                }
                
            }
        }
    }

}
</style>

