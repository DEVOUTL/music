<template>

 <itemmusicto :playlist="state.playlist"/>
 <itemmusiccat
    :itemlist="state.itemlist"
    :subscribedCount="state.playlist.subscribedCount"
  />
</template>
<script>
import {useRoute} from 'vue-router'
import {onMounted, reactive} from 'vue'
import { getmusicitemlist,getitemlist } from '@/request/api/item.js'

import itemmusicto from '@/components/item/itemmusicto.vue'

import Itemmusiccat from '../components/item/itemmusiccat.vue'
export default{
    setup() {
     const state = reactive({
        playlist:{},
        itemlist:[]

        
     
     })
       onMounted(async()=>{
        let id = useRoute().query.id;
        console.log(id);
         //   获取歌单详情页
    console.log(useRoute());
    let res = await getmusicitemlist(id);

    console.log(res);
   
    state.playlist=res.data.playlist
   let result = await getitemlist({ id, limit: 10, offset: 0 });
    console.log(result)
  //   防止页面刷新，数据丢失，将数据保存到sessionStorage中
  state.itemlist =result.data.songs
      sessionStorage.setItem("itemDetail", JSON.stringify(state));
       }) ;
       return {state}
    },
    components:{
    itemmusicto,
    Itemmusiccat
}
}
</script>
  