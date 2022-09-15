<template class="Home">
<div>
<TopNav/>
<Swipertop/>
<IconList/>
<Musiclist/>

</div> 
</template>

<script>
// @ is an alias to /src
import swipertop from '@/components/HOME/swipertop.vue'
import TopNav from '@/components/HOME/TopNav.vue'
import Swipertop from '@/components/HOME/swipertop.vue'
import IconList from '@/components/HOME/iconList.vue';
import Musiclist from '@/components/HOME/musiclist.vue';

export default {
  name: 'HomeView',
  components: {
    TopNav,
    swipertop,
    Swipertop,
    IconList,
    Musiclist,
    
    
}
}
</script>
