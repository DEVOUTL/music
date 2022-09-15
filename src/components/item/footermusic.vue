<template>
    <div class="footmusic">
    <div class="footerLeft" @click="updateDetailShow">
      <img :src="playmusic[playmusicindex].al.picUrl" alt="" />
      <div>
        <span>{{ playmusic[playmusicindex].name }}</span>
        <span>横滑切换上下首哦</span>
      </div>
    </div>
     <div class="footerRight">
      <svg class="icon liebiao" aria-hidden="true" @click="play" v-if="isbtnshow">
        <use xlink:href="#icon-kaishi"></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-zanting"></use>
      </svg>  
      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-quanxuan"></use>
      </svg>
    </div>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playmusic[playmusicindex].id}.mp3` ">
    </audio>
    <van-popup v-model:show="detailShow" position="bottom" :style="{ height: '100%',width:'100%' }" >
    <MusicDetail
    :musicList="playmusic[playmusicindex]"
    :play="play"
    :isbtnshow="isbtnshow"
    :addDuration="addDuration"/>
    </van-popup>
    </div>
    
</template>
<script>

import { mapMutations, mapState } from "vuex";
import MusicDetail from "@/components/item/MusicDetail.vue";
export default {
data() {
    return {
      interVal: 0,
    };
  },

    computed:{
        ...mapState(['playmusic','playmusicindex','isbtnshow','detailShow'])
        
    },
    mounted(){
      console.log(this.$refs);
      this.$store.dispatch("getlyric", this.playmusic[this.playmusicindex].id);
  
    },
    updated(){
      this.$store.dispatch("getlyric", this.playmusic[this.playmusicindex].id);
 
    },
    methods:{
      play:function(){
        if(this.$refs.audio.paused){
          this.$refs.audio.play();
          this.updateisbtnshow(false)
          this.updateTime();
        }else{
         this.$refs.audio.pause();
         this.updateisbtnshow(true)
         clearInterval(this.interVal);
        }
       
        
      },
      addDuration:function(){
      this.updateDuration(this.$refs.audio.duration)
    },
    updateTime: function () {
      this.interVal = setInterval(() => {
        this.updateCurrentTime(this.$refs.audio.currentTime);
      }, 1000);
    },
...mapMutations(['updateisbtnshow','updateDetailShow',"updateCurrentTime",
      "updateDuration"])
    },
    watch:{
      playmusicindex:function(){
        this.$refs.audio.autoplay=true;//监听如果下标发生了改变，就自动播放音乐
        if (this.$refs.audio.paused) {
        //如果是暂停状态，改变图标
        this.updateisbtnshow(false);
      }
      },
      playmusic:function(){
        if(this.isbtnshow){
          this.$refs.audio.autoplay=true;
          this.updateisbtnshow(false)
        }
      }
    },
    components:{
    MusicDetail,
  
}
};

</script>


<style lang="less" scoped>
.footmusic{
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  .footerLeft {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }
  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }

}
span{
  width: 100%;
  height: 30px;
}
</style>