<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(item,index) in swipes" :key="index"  >
      <ul class="ul_sf">
        <li v-for="(arr,d) in item.UlList" :key="index+d" name="name" >
          <img :src="arr.url" alt="" style="width:80px;height:20px">
        </li>
        <li v-for="(brr,a) in item.UlList1" :key="index+a" >
          <img :src="brr.url" alt="" style="width:20px;height:20px">
        </li>
      </ul>
      
      <!-- <h3>{{ item }}</h3> -->
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data(){
    return{
      autoply:2000,
       swipes:[
         
         {
           
           name:1,
           
           UlList:[
              {
              name:1,
              url:require("../assit/image/11.jpg")
        },
        {
              name:2,
              url:require("../assit/image/22.jpg")
        },
        {
              name:3,
              url:require("../assit/image/44.jpg")
        },
        {
              name:4,
              url:require("../assit/image/233.jpg")
        },
        {
              name:5,
              url:require("../assit/image/233.jpg")
        },
        {
              name:6,
              url:require("../assit/image/233.jpg")
        } ],
      
           name:2,
           UlList1:[
              {
              num:1,
              url:require("../assit/image/11.jpg")
        },
        {
              num:2,
              url:require("../assit/image/22.jpg")
        },
        {
              num:3,
              url:require("../assit/image/44.jpg")
        },
        {
              num:4,
              url:require("../assit/image/233.jpg")
        },
        {
              num:5,
              url:require("../assit/image/233.jpg")
        },
        {
              num:6,
              url:require("../assit/image/233.jpg")
        }
          ]   
         }
         ],
    }
  }}

</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.ul_sf{
 display: inline-block;
 width: 15%;
 
}
ul li{
  display: inline-block
}
</style>