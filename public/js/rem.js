function remSize(){ 
    //获取设备宽度
    var deviceWidth=document.documentElement.clientwidth || window.innerWidth
    if(deviceWidth>=750){
        deviceWidth=750
    }
    if(deviceWidth<=320){
        deviceWidth=320
    }
    //  1rem=100px     deviceWidth/7.5-->50px
    document.documentElement.style.fontSize=(deviceWidth/7.5)+"px"
    // 字体大小
    document.querySelector('body').style.fontSize=0.3+"rem"//15px
}
remSize()
//窗口发生变化时就会调用适配
window.onresize=function(){
  remSize()
}