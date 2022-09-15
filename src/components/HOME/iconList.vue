<template>
    <div class="iconList">
        <div class="iconitem">
    <svg class="icon" aria-atomic="true">
        <use xlink:href="#icon-aixin"></use>
    </svg>
    <span>每日推荐</span>
    </div>
         <div class="iconitem">
    <svg class="icon" aria-atomic="true">
        <use xlink:href="#icon-aixin"></use>
    </svg>
    <span>每日推荐</span>
    </div>
         <div class="iconitem">
    <svg class="icon" aria-atomic="true">
        <use xlink:href="#icon-gedan"></use>
    </svg>
    <span>每日推荐</span>
    </div>
          <div class="iconitem">
    <svg class="icon" aria-atomic="true">
        <use xlink:href="#icon-gedan"></use>
    </svg>
    <span>每日推荐</span>
    </div>
      </div>
      
   

</template>
<style scoped>
.iconList{
    display:flex;
    width:100%;
    justify-content: space-around;
    align-items: center;
    margin-top: .2rem;

}

.iconitem{
  width:25% ;
  height: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
}
.icon{
    width:1rem;
    height: 1rem;

}
</style>