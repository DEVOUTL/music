<template>
    <div class="itemmusicbox">
        <div class="itemmusictop">
            <div class="itemmusicleft">
<svg class="iconleft" aria-hidden="true">
    <use xlink:href="#icon-kaishi"></use>
</svg>
<span class="spanleft">播放全部</span>

            </div>
        <div class="itemmusicright">
    <svg class="iconright" aria-hidden="true">
          <use xlink:href="#icon-jiahao"></use>
        </svg>
        <span>收藏({{ subscribedCount }})</span>
        </div>
    </div>
 <div class="musiclist">
  <div class="item"  v-for="(item, i) in itemlist" :key="i">
   <div class="itemLeft" @click="playMusic(i)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div class="itemlist">
            <p>{{ item.name }}</p>
            <span class="musicname" v-for="(item1, index) in item.ar" :key="index">{{
              item1.name
            }}</span>
          </div>
        </div>
         <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if='item.mv !=0'>
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-gedan1"></use>
          </svg>
        </div>
  </div>
    </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    setup(props) {
    console.log(props)
    },
    props:['itemlist','subscribedCount'],
methods:{
  playMusic:function(i){
this.updateplaymusic(this.itemlist)
this.updateplaymusicindex(i)
  },
  
  ...mapMutations(['updateplaymusic','updateplaymusicindex'])
}
};

</script>
<style scoped>
.itemmusicbox{
    width: 100%;
    height: 10rem;
    background-color: #fff;
      padding: 0 0.2rem;
  margin-top: 0.2rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
}
.itemmusictop{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 1rem;
     align-items: center;

}
.itemmusicright{
    display: flex;
      align-items: center;
      background-color: red;
      padding: 0.2rem;
      border-radius: 0.4rem;
      color: #fff;
}
.iconright{
     width: 0.4rem;
        height: 0.4rem;
        fill: #fff;
        margin-right: 0.1rem;
        stroke: #fff;
        stroke-width: 50;
}
.itemmusicleft{

   width: 3rem;
      height: 100%;
      display: flex;
      
      align-items: center;
}
.iconleft{
    width: 35px;
    height: 35px;
}
.spanleft{
    position: absolute;
    left:60px
}
.musiclist{
    width: 100%;
    height: 10rem;
}

    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;}
      .itemLeft {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        }
        .musiclist{
            width: 100%;
        }
        .item{
                width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

        }
        .itemLeft{
       display: flex;
        
        }
        .itemlist{
            position: absolute;
            left:35px
        }
    p{
        width: 4.54rem;
            height: .4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
    }
    .musicname{
       font-weight: 400;
            font-size: .24rem;
           color: #999;
         
    }
    .itemRight{
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        }
         .icon{
          fill: #999;
        }
         .bofang{
            position: absolute;
            left: 0;
          }
           .liebiao{
            position: absolute;
            right: 0;
          }
</style>