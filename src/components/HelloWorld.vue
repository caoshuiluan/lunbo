<template>
  <div>
    <p>{{shuju}}</p>
    <button @click="Goup()" v-show="Goup">上一篇</button>
    <button @click="nextPage()" v-show="nextPage">下一篇</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shuju:"",
      data1: [],
      // 所有页面的数据
      totalPage: 30,
      // 每页显示数量
      pageSize: 5,
      // 共几页
      pageNum: 6,
      // 当前显示的数据
      dataShow: "",
      // 默认当前显示第一页
      currentPage: 0,
      //页码
      pageNo:"",
      nextPage:false,
      pageNo:"",
    };
  },
  methods: {
    function(){
      //模拟后台传过来的数据
      for(let i=0;i<totalPage.lenght;i++){
        this.data.push({name:"cao",date:"date.val"})
      }
    // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
      this.pageNum=this.data1.ceil(this.data.length/this.pageSize)||1;
      for(let i=0;i<this.pageNum;i++){
        // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
      // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为5， 则第一页是1-5(对slice操作来说是0-5)条，第二页是6-10(对slice操作来说是5-10)条

        this.totalPage[i]=this.data.list.slice(this.pageSize*i,this.pageSize*(i+1))
      }  
    // 当前显示的内容
      this.dataShow=this.totalPage[this.currentPage];
    },
     jiazai(cur){
       this.pageNo=cur||this.pageNO;
       this.$ajax({
         method:"get",
         url:"http://api.apiopen.top/musicDetails"
       }).then(res=>{
         this.shuju=res.data
       }) .catch(error=>{
        console.log("error" + error);
      });
    }, 
    //上一页
    Goup() {
      let totalPage = currentPage - 1;
      if (totalPage == 0) {  
        console.log("已经是第一页");
          this.Goup=false;
          this.dataShow=this.totalPage[this.currentPage];
          this.nextPage=false
        }else if(totalPage !==0||totalPage >=1){
          this.Goup=true;
        }
        return false;
      }
    },
    //下一页
    nextPage() {
      let totalPage = currentPage + 1;
      if(totalPage>=1){
         this.nextPage=true
         this.dataShow=this.totalPage[this.currentPage];
      }else if(pageNo == totalPage){
        console.log("已经是最后一页");
        this.nextPage=false
         
      }
    },
  
  mounted() {
   this.jiazai();
  },
 
};
</script>
<style>
</style>