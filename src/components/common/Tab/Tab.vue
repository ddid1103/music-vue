<template>
    <div class="tab">
        <router-link 
        v-for="(item,index) in list"
        :key="index"
        tag="div" 
        :to="item.path" 
        active-class="selected"
        >
            <span class="item">{{item.text}}</span>
        </router-link>
        
    </div>
</template>
<script>
export default {
    name:"Tab",
    data(){
        return {
            list:[{path:"recommend",text:"推荐"},
                {path:"singer",text:"歌手"},
                {path:"rank",text:"排行"},
                {path:"search",text:"搜索"},
            ]
        }
    }
}
</script>
<style lang="less" scope>
@import "~style/index.less";
.tab{
    width:100%;
    .h(44);
    display:flex;
    div{
        flex:1;
        font-size:@font-size-ms;
        color:@font-color-tab;
        text-align:center;
        .l_h(44);
        .item{
            padding-bottom:5px;
        }
    }
    .selected{
        color:@font-color-header;
        .item{
            border-bottom:2px solid @font-color-header;
        }
    }
}

</style>

