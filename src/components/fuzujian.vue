    
<template>
  <md-card>
    <md-card-actions>
      <!-- <div class="md-subhead">
        <span>Loop Mode with Multiple Slides Per Group</span>
        <span>（</span>
        <span>Loop 模式 + Slides 分组</span>
        <span>）</span>
      </div> -->
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/21-infinite-loop-with-slides-per-group.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide> <img src="../assit/image/love.png" alt=""> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt=""> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt=""> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt=""> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt=""> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt=""> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt=""> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt=""> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt=""> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt=""> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt=""></swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt=""></swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
         autoplay: 500,
          slidesPerView: 6,
          spaceBetween: 10,
          slidesPerGroup: 2,
          // 　direction: 'vertical',
// 　　observer:true,//修改swiper自己或子元素时，自动初始化swiper 
// 　　observeParents:true,//修改swiper的父元素时，自动初始化swiper 
　　loop:true,
　　autoplay: {
　　　　delay: 2000,
　　disableOnInteraction: false},
          // loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>