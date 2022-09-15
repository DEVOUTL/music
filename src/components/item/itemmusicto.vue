<template>
    <div class="itemmusictops">
        <div class="itemmusictop">
         <img :src="playlist.coverImgUrl" alt="" class="bgimg">
       
      <div class="itemleft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
    <use xlink:href="#icon-kaishi"></use>
    </svg>
    <span>歌单</span>

      </div>
      <div class="itemright">
       <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-sousuo"></use>  
    </svg>
      <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-liebiao"></use>  
    </svg>  
    </div>  
    
    </div>
   <div class="itemcout">
    <div class="itemcoutleft">
    <img :src="playlist.coverImgUrl" alt="" class="bgimgs">
    </div>
  <div class="itemcoutright">
  <span class="need">{{playlist.name}}</span>
 <img :src="playlist.creator.avatarUrl" alt="" class="bigimg"/>
    <span class="bigname">{{ playlist.creator.nickname }}</span>
 <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
           <p class="rightP_two">
        <span class="rightP_three">{{ playlist.description }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou1"></use>
        </svg>
      </p>

 </div>

 
    </div>
   </div>
   <div class="itemTopFooter">
<div class="footerItem">
<svg class="icons" aria-hidden="true">
        <use xlink:href="#icon-31xiaoxi"></use>
      </svg>
      <span class="sp">{{ playlist.commentCount }}</span>
</div>
<div class="footerItem">
<svg class="icons" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
      <span class="sp">{{ playlist.shareCount }}</span>
</div>
<div class="footerItem">
<svg class="icons" aria-hidden="true">
        <use xlink:href="#icon-show_duoxuan"></use>
      </svg>
        <span class="sp">下载</span>
</div>
<div class="footerItem">
<svg class="icons" aria-hidden="true">
        <use xlink:href="#icon-show_duoxuan"></use>
      </svg>
        <span class="sp">多选</span>
</div>
   </div>

</template>
<script>


export default {
    setup(props){
        console.log(props);
        if((props.playlist.creator="")){
        props.playlist.creator=JSON.parse(sessionStorage.getItem().playlist).creator
        }

        
    },
    props:['playlist']
  
};
</script>
<style scoped>
.itemmusictop{
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: space-between;
    /*padding: .2rem;*/
    position: relative;
    top:15px;
   
  
}
.itemleft{
width: 25%;
height: 100%;
display:flex;
justify-content: space-between;
align-items: center;
margin: 0 .2rem;



}
.itemright{
width: 25%;
height: 100%;
display:flex;
justify-content: space-between;
align-items: center;
margin: 0 .2rem;
}
.icon{
    fill: #fff;
   
}

span{
    font-size:20px ;
    color: #fff;

}
.bgimg{
    width: 100%;
    height: 6rem;
    position: absolute;
    z-index: -1;
    filter:blur(30px)

}
.mont{
    display: flex;
}
.bgimgs{
    width: 130px;
    height: 150px;
    position: absolute;
   top: 60px;
   left: 10px;
   border-radius: 0.2rem;


}
.itemcout{
   width: 100%;
   height: 200px;
    display: flex;
}
.need{
        box-sizing: border-box;
        position: absolute;
        font-size: 0.3rem;

}
.itemcoutright{
 width:50%;
   float:right;

   white-space: normal;
   position:absolute;
   top:60px;
   left: 3.3rem;
  height: 150px;
   
}
.itemcoutleft{
    width:3rem;

 height: 100%;
}
.bigimg{
  
    position: absolute;
    width: 35px;
    height: 35px;
    top:60px;
    border-radius: 2rem;
}
.bigname{
     position: absolute;
    width: 60px;
    height: 35px;
    top:60px;
  margin: 0 0 20px;
    line-height: 35px;
    left: 45px;
}
 .rightP_two {
      width: 100%;
      height: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
     position: absolute;
     top:110px
 }
 .rightP_three{
       display: inline-block;
        width: 95%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.24rem;
        color: #ccc;
 }
.itemTopFooter{
  display: flex;
  width: 375px;
  height: 70px;
  justify-content: space-between
}
.footerItem{
 
  height: 100%;
  width: 80px;
   display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
}
.icons{
  width: 0.7rem;
  height: .7rem;
       
}
.sp{
  margin-top:0.1rem ;
  font-size: 0.4rem;
}
</style>



