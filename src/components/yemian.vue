<template>
    <md-card>
      <md-card-actions>
        <div class="md-subhead">
         
        </div>
        <!-- <md-button class="md-icon-button"
                   target="_blank"
                   href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/21-infinite-loop-with-slides-per-group.vue">
          <md-icon>code</md-icon> -->
        <!-- </md-button> -->
      </md-card-actions>
      <md-card-media>
        <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide><img src="../assets/11.png" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/22.png" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/222222.png" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/33.png" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/logo.png" alt=""></swiper-slide>
          
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </md-card-media>
    </md-card>
  </template>
  
  <script>
  import { swiper,swiperSlide} from 'vue-awesome-swiper'
    export default {
      data() {
        return {
          swiperOption: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
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