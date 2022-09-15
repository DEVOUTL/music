<template>
   <div class="musiclist">
    <div class="musictop">
        <div class="title">发现好歌单</div>
        <div class="MORE">查看更多</div>
    </div>
    <div class="musicenter">
      <van-swipe
        :loop="false"
        :width="130"
        class="myswpie"
        :show-indicators="false"
      >
    <van-swipe-item v-for="item in musiclist" :key="item">
    <router-link :to="{path:'/itemmusic',query:{id:item.id}}">
          <img :src="item.picUrl"  alt="item.name" />
          <span class="playcount">
             <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-kaishi"></use>
    </svg>
    {{changeCount(item.playCount)}}
          </span>
          <span class="nood">{{item.name}}</span>
          </router-link>
</van-swipe-item>
</van-swipe>
    </div> 
   </div> 
</template>
<script>
import { getmusiclist } from '@/request/api/home.js';
import { reactive, onMounted } from "vue";
export default{
  data(){
        return{
     musiclist:[]//存储数据
           }

       },
    methods:{
    async getgedan(){
    let res = await getmusiclist();
    console.log(res);
    this.musiclist=res.data.result;
                },          
    changeCount:function(num){
     if(num>=100000000){
            return (num/100000000).toFixed(1)+"亿"
}else if(num>=10000){
        return(num/10000).toFixed(1)+"万"
  }
     }
      },
     mounted(){
    this.getgedan()
          }
  }
// setup() {
//     const state = reactive({
//       musiclist: [],
//     });
//     function changeCount(num) {
//       if (num >= 100000000) {
//         return (num / 100000000).toFixed(1) + "亿";
//       } else if (num >= 10000) {
//         return (num / 10000).toFixed(1) + "万";
//       }
//     }
//     onMounted(async () => {
//       let res = await getmusiclist();
//       console.log(res);
//       state.musiclist = res.data.result;
//     });
//     return { state,changeCount };
//   },
 
// };
</script>

<style lang="less" scoped>

.musiclist{
    width: 100%;
    height: 5rem;
    padding: .2rem;
}
.musictop{
   
    width:100%;
    height: 0.6rem;
    display: flex;
    justify-content:space-between;
    margin-bottom:0.2rem;
}
.title{
    font-size:0.4rem;
    font-weight: 900;
}
.musicenter{
   width: 100%; 
   height: 200px;
}
.myswipe{
height: 100%; 

}
.playcount{
    position: absolute;
   z-index: 100;
        right: 0.3rem;
         margin-top: 0.06rem;
    color: azure;
}
 .icon {
          width: 0.3rem;
          height: 0.3rem;
        }
         .nood {
        //   position: absolute;
        bottom: 0px;
        color: aqua;
      }
       img {
        width: 100%;
        height: 2.4rem;
        border-radius: 0.2rem;
        //   position: absolute;
      }
</style>
