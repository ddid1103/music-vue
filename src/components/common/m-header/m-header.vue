<template>
    <div class="m-header">
        Chicken Music
    </div>
</template>
<script>
export default {
   name:"MHeader" 
}
</script>
<style lang="less" scope>
@import "~style/index.less";
.m-header{
    .w(375);
    .h(44);
    text-align:center;
    .l_h(44);
    color:@font-color-header;
    font-size:@font-size-m;
}
</style>