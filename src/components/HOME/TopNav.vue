<template>
    <div class="TopNav">
        <div class="topleft">
       <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-gedan1"></use>
</svg>
  </div>
    <div class="TopContent">
        <span>我的</span>
        <span class="active">发现</span>
        <span>云村</span>
        <span>视频</span>
    </div>
     <div class="topright">
       <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
    <use xlink:href="#icon-sousuo"></use>
    </svg>
    </div>
    </div>
</template>
<style lang="less" scoped>
.TopNav{
    width: 100%;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.TopContent{
    width: 65%;
    display: flex;
    height: 100%;
    justify-content: space-around;
    //align-items: center;
    font-size: .36rem;
    }
    .active{
        font-weight: 900;
    }
</style>