<template>
    <div class='singer-detail'>
        <div class='header'>
            <h4> 
                <span class='sign' @click='back'> 《 </span>
                <span >{{params.name}}</span>
            </h4>
            <img :src="params.avator" alt="">
        </div>
            
        
        <div class="songList wrapper" ref='songList'>
            <ul class='content'>
                <li v-for='(item,index) in songs' 
                :key='index' 
                @click='playMusic(index)'
                >
                    <p>{{item.songname}}</p>
                    {{item.name}}-{{item.albumname}}

                </li>
            </ul>
        </div>
    </div>
</template>
<script>
//https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=80&songstatus=1&singermid=0025NhlN2yWrP4&jsonpCallback=jp2
//https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=80&songstatus=1&singermid=0025NhlN2yWrP4&jsonpCallback=jp1
import jsonp from '@/common/js/jsonp.js'
import BScroll_singer from 'better-scroll'

export default {
    name:'DetailSinger',
    data(){
        return {
            songs:[]
        }
    },
    methods:{
        playMusic(index){
            this.$store.commit("addSongList",this.songs)
            this.$store.commit("changeIndex",index)
        },
        back(){
            this.$router.back()
        },
        normalSongList(list){
            let arr=[];
            list.forEach((item)=>{
                arr.push({
                    albummid:item.musicData.albummid,
                    name:item.musicData.singer[0].name,
                    songname:item.musicData.songname,
                    mid:item.musicData.singer[0].mid,
                    albumname:item.musicData.albumname,
                    songmid:item.musicData.songmid,
                    interval:item.musicData.interval
                })
            }) 
           // console.log(arr)
            this.songs=arr
            console.log(this.songs)
        },
        initSongData(){
           let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
           let data = {
               g_tk: '1928093487',
                inCharset: 'utf-8',
                outCharset: 'utf-8',
                notice: 0,
                format: 'jsonp',
                hostUin: 0,
                needNewCode: 0,
                platform: 'yqq',
                order: 'listen',
                begin: 0,
                num: 80,
                songstatus: 1,
                singermid: this.$route.params.mid,
                }
           let opt = {param:'jsonpCallback'}

           jsonp(url,data,opt)
                .then((data)=>{
                    //console.log(data)
                    let res = data.data.list
                    let brr = []
                    this.normalSongList(res);
                    
            //   let elobj=this.$refs.wrapper
            //  new BScroll(elobj,{probeType:2,click:true})
                })
                .catch((err)=>{
                    console.log(err)
                })
        }  
    },
    created(){
        console.log(this.$store)
        if(!this.$route.params.name){//params 没有的时候是个空对象
            return this.$router.replace('/singer')
        }
         //console.log(this.$route.params)
        this.initSongData();
        setTimeout(()=>{
              let elobj=this.$refs.songList
              this.scroll = new BScroll_singer(elobj,{probeType:2,click:true}) //this值得是当前vue
          },20)
    },
    computed:{
        params(){
            return this.$route.params
        }
    },
    // mounted(){
    //      let elobj=this.$refs.wrapper
    //     new BScroll(elobj,{probeType:2,click:true})
    // }
}
</script>
<style lang='less' scope>
@import '~style/index.less';
.singer-detail{
    background:@bg-color;
    position:fixed;
    top:0;
    bottom:0;
    .w(375);
    z-index:10;
    .header{
        .h(278);
        .w(375);
        .l_h(44);
        text-align:center;
        background: rgba(7,17,27,.4);
        h4{
            position:absolute;
            .top(0);
            display:flex;
            .h(40);
            .l_h(40);
            .w(375);
            color:#fff;
             font-size:18px;
            .sign{
                display:block;
                padding: 10px;
                font-size: 20px;
                color: #ffcd32;
                .margin(0,90,0,0)
            }
        }
        img{
           .h(370);
           .w(375);
        }
    }
    .songList{
        position:fixed;
        .bottom(0);
        .top(258);
        background:@bg-color;
        .content{
            .padding(20,30,20,30);
            list-style:none;
           
            li{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin-top: 4px;
                font-size:@font-size-ms;
                color:@font-color-tab;
                .h(64);
               p{
                font-size:@font-size-ms;
                 color:#fff;
                 .margin(0,0,6,0)
                } 
            }
            
        }
    }
}

</style>

