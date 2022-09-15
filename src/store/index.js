import { createStore } from 'vuex'
import{ getmusiclyric } from "@/request/api/item.js"
export default createStore({
  state: {  
    playmusic:[{
al:{
  id: 132402226,
  name: "Wake",
  pic: 109951166328143740,
  picUrl: "https://p2.music.126.net/Uo7OXdK3g4LQdc2hzJ14qQ==/109951166328143737.jpg",
  pic_str: "109951166328143737",
},
id:1873321491

    }],
    playmusicindex:0,
    isbtnshow:true,
    detailShow:false,
    lyriclist:{},
    currentTime:0,
  },
  getters: {
  },
  mutations: {
    updateisbtnshow:function(state,value){
      state.isbtnshow=value
    },
    pushPlayList:function(state,value){
      state.playmusic.push(value)
    },
    updateplaymusic:function(state,value){
      state.playmusic=value
      console.log(state.playmusic)
    },
 
    updateplaymusicindex:function(state,value){
      state.playmusicindex=value
    },
    updateDetailShow:function(state,value){
      state.detailShow=!state.detailShow},

updatelyriclist:function(state,value){
  state.lyriclist=value
},
updateCurrentTime:function(state,value){
  //console.log(state.currentTime);
  state.currentTime=value
},
  },
  actions: {
    getlyric:async function(context,value){
  let res=await getmusiclyric(value)
  console.log(res);
  context.commit("updatelyriclist",res.data.lrc)
    }

},
  modules: {}
})
