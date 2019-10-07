    
<template>
  <div>
    <div>
      <!-- <div class="md-subhead">
        <span>Loop Mode with Multiple Slides Per Group</span>
        <span>（</span>
        <span>Loop 模式 + Slides 分组</span>
        <span>）</span>
      </div> -->
      <!-- <div class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/21-infinite-loop-with-slides-per-group.vue">
         <md-icon>code</md-icon> -->
      <!-- </div> -->
    </div>
    <div>
      <!-- swiper -->
      <swiper :options="swiperOption" class="swiper_sf">
        <swiper-slide> <img src="../assit/image/love.png" alt="" style="width:50px;height:20px"> </swiper-slide>
        <swiper-slide><img src="../assit/image/11.jpg" alt="" style="width:50px;height:20px"> </swiper-slide>
        <swiper-slide><img src="../assit/image/22.jpg" alt="" style="width:50px;height:20px"> </swiper-slide>
        <swiper-slide><img src="../assit/image/233.jpg" alt="" style="width:50px;height:20px" > </swiper-slide>
        <swiper-slide><img src="../assit/image/44.jpg" alt="" style="width:50px;height:20px"> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt="" style="width:50px;height:20px"> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt="" style="width:50px;height:20px"> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt="" style="width:50px;height:20px"> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt="" style="width:50px;height:20px"> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt="" style="width:50px;height:20px"> </swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt="" style="width:50px;height:20px"></swiper-slide>
        <swiper-slide><img src="../assit/image/love.png" alt="" style="width:50px;height:20px"></swiper-slide>
       
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
      <!-- <el-popover 
          ref="popover1"
          placement="left-start"
          title="在线客服"
          trigger="hover"
          content="QQ在线聊天">
      </el-popover>
      <el-button v-popover:popover1 >在线客服</el-button> -->
      <div style="" class="box">
          <a href="http://wpa.qq.com/msgrd?v=3&uin=875001151&site=qq&menu=yes" class="qqzixun">
         
           <div style="color:white;text-align: center;margin-top:20px" >QQ在线</div>
            <div><img src="../assit/image/qq2 (1).png" alt="" style="text-align: center;" ></div>
                 
          </a>
          <span style="color:white">客服电话：4444444</span>


      </div>
      

  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
         autoplay: 500,
          slidesPerView: 6,
          spaceBetween: 0,
          slidesPerGroup: 6,
          // 　direction: 'vertical',
// 　　observer:true,//修改swiper自己或子元素时，自动初始化swiper 
// 　　observeParents:true,//修改swiper的父元素时，自动初始化swiper 
　　loop:true,
　　autoplay: {
　　　　delay: 2000,
　　disableOnInteraction: false},
          // loop: true,
          // loopFillGroupWithBlank: true,
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
<style scoped>
.swiper_sf{
  width: 60%;
  height: 50px;
  line-height: 60px;
}
.qqzixun{
  width: 300px;
  height: 300px;
  background: rgb(228, 165, 165);
text-decoration : none ;
text-align: center;

  
}

.box{
  width:100px;
  height:130px;
  background:orange;
  position: absolute;
  top: 300px;
  right: 0;
  border-radius: 10px 0 0 10px;
  font-size: 13px;

}
</style>
<style >
.el-popper[x-placement^=left] {
    margin-right: 1px;
    width: 300px;
    height: 300px;
    background: red;
    transform-origin: right center;
    z-index: 2005;
    position: absolute;
    top: 182px;
    right: 0;
}
.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    position: absolute;
    top: 400px;
    right: 0;
}
</style>