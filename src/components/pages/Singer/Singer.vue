<template>
    <div class="singer wrapper" ref="singer">
        <div class="scrollList content">
            <ul class="group">
                <li
                class='group-item'
                v-for="(group,index) in list" 
                :key="index"
                >
                <p class="title" :ref="group.title">{{group.title}}</p>
                <ol>
                    <li
                    v-for="(item,index) in group.items" 
                    :key="index"
                    @click="goSingerDetail(item)"
                    >
                    <img v-lazy="item.avator" alt="">
                    <p>{{item.name}}</p>
                    </li>
                </ol>
                </li>
            </ul>
        </div>
        <div class="sider">
            <ul 
            @touchstart="touchBegin"
            @touchmove="touchMove"
            >
                <li
                v-for="(item,index) in sliderData"
                :key="index"
                :class="sel==item?'yellow':'white'"
                >
                    {{item}}
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import Data from "data/singer.js"
import BScroll from 'better-scroll' 
export default {
   name:"Recommend" ,
    data(){
        return {
            list:[],
            sel:'热'
        }
    },
    methods:{
        goSingerDetail(item){
           // console.log(item)
            this.$router.push({name:'singerDetail',params:item})
        },
        normalData(data){
            let lists={
                'hot': {
                    title:'热门',
                    items:[]
                },
                'A':{
                    title:'A',
                    items:[]
                }
            };
            for( let i = 0 ; i < data.length ; i++ ){
                //热门
                let img = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${data[i].Fsinger_mid}.jpg?max_age=2592000`
                if( i <= 10){
                    lists.hot.items.push({
                        name:data[i].Fsinger_name,
                        id:data[i].Fsinger_id,
                        mid:data[i].Fsinger_mid,
                        avator:img
                    })
                }
                //分类
                if(!lists[data[i].Findex]){
                    lists[data[i].Findex]={
                        title:data[i].Findex,
                        items:[{
                            name:data[i].Fsinger_name,
                            id:data[i].Fsinger_id,
                            mid:data[i].Fsinger_mid,
                            avator:img
                        }]
                    }
                } else{
                    //key存在
                    lists[data[i].Findex].items.push({
                            name:data[i].Fsinger_name,
                            id:data[i].Fsinger_id,
                            mid:data[i].Fsinger_mid,
                            avator:img
                        })
                }
            }
            //取出不需要的项，按照首字母排序 先拆分  排序 再合并
            let arr = [];
            let hot = [];
            for( var  key in lists ){
                if(key === "hot"){
                    hot.push(lists[key])
                }else if(key.match(/[a-zA-Z]/)){
                   // console.log(key,key.match(/[a-zA-Z]/))
                    arr.push(lists[key])
                }
            }
           // console.log(arr)
            arr.sort((a,b)=>{
                return a.title.charCodeAt(0)-b.title.charCodeAt(0)
            })
           //console.log(hot.concat(arr))
           this.list=hot.concat(arr)
           console.log(this.list)
        },
        touchMove(e){
            let moveY = e.touches[0].clientY-this.touchStartY;
            let index = parseInt(moveY/17)+this.touchindex;
            if(index > 22){
                index = 22
            }else if(index <0){
                index = 0
            }
            console.log(index);
            let target = this.sliderData[index]=="热"?"热门":this.sliderData[index]
            this.sel = this.sliderData[index]
           //  if( target.match(/[A-Z]/) || target.match(/['热门']/) ){
                  let element = this.$refs[target][0];
                  this.scroll.scrollToElement(element)
                //console.log(e.targetTouches[0].target.innerText)
            // }
           
        },
        touchBegin(e){
            //console.log("点击")
            //console.log(e.touches[0].clientY);
            this.touchStartY = e.touches[0].clientY
            let target = e.target.innerText=="热"?"热门":e.target.innerText
            this.touchindex = this.sliderData.indexOf(e.target.innerText)
           // console.log(index);
            this.sel = e.target.innerText;
            //console.log(this.$refs);
            let element = this.$refs[target][0];
            //console.log(this.$refs[target]);
            //console.log(this.$refs[target][0]);//数组的第一个值是元素<p class="title">A</p>
            this.scroll.scrollToElement(element)
        }
    },
    computed:{
        sliderData(){
            let newdata = this.list.map((item)=>{
                if( item.title == "热门" ){
                    return "热";
                }else{
                    return item.title;
                }
                
            })
           // console.log(newdata)
            return newdata
        }
    },
    created(){
        this.touchStartY = 0
        setTimeout(()=>{
           //console.log(Data)
           let data = Data.data.list;
           this.normalData(data);
          // this.$nestTick()
          setTimeout(()=>{
              let elobj=this.$refs.singer
              this.scroll = new BScroll(elobj,{probeType:2,click:true}) //this值得是当前vue
              this.scroll.on("scroll",(x,y)=>{
                  //console.log("滚起来")
                  //console.log(x,y)
              })
          },20)
        },500)
    }
} 

// [{
//     title:"A",
//     items:[{
//         name:"",
//         id:"",
//         avator:""
//     }]
// }]
</script>
<style lang="less" scope>
@import "~style/index.less";
.white{
    color:@font-color-tab;
}
.yellow{
    color:@font-color-header;
}
.wrapper{
    .w(375);
    position:fixed;
    .bottom(0);
    .top(88);
    overflow:hidden;
    .group{
        .group-item{
            font-size:0;
            .margin(0,0,20,0);
            .title{
                .h(30);
                .l_h(30);
                .padding(0,0,0,20);
                color:@font-color-tab;
                font-size:@font-size-s;
                background:@bg-first;
            } 
            ol{
                li{
                    .h(70);
                    .w(375);
                    font-size:@font-size-ms;
                    color:@font-color-tab;
                    .padding(20,0,0,30);
                    box-sizing: border-box;
                    display:flex;
                    img{
                        .w(50);
                        .h(50);
                        border-radius:50%;
                    }
                    p{
                        .padding(14,0,0,20);
                    }
                }
            }
        }
        
    }
    .sider{
        position:absolute;
        .right(0);
        top:50%; 
        transform: translateY(-50%);
        background: rgba(0,0,0,.3);
        .padding(20,0,20,0);
        border-radius:10px;
        .w(20);
        text-align: center;
        font-family: Helvetica;
        ul{
            li{
                list-style:none;
                font-size:@font-size-s;
               // color:@font-color-tab;
                .padding(2,2,2,2)
            }
        }
    }
}
</style>
