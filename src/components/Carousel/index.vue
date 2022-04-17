<template>
   <div class="swiper-container" id="floor1Swiper" ref="ke">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="carous in list"
                    :key="carous.id"
                  >
                    <img :src="carous.imgUrl" />
                  </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>

                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
</template>

<script>
import Swiper from "swiper";
export default {
    props:['list'],
    watch:{
      list:{
          immediate:true,
           handler(){
              this.$nextTick(()=>{var mySwiper=new Swiper(this.$refs.ke,{
                 loop:true,
                 pagination:{
                     el:'.swiper-pagination',
                     clickable:true,
                 },
                 navigation:{
                     nextEl:'.swiper-button-next',
                     prevEl:'.swiper-button-prev',
                 },
             })})
           }
      }
  }
}
</script>

<style>

</style>