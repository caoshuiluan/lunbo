<template>
  <div>
    <button @click="Goup()">上一篇</button>
    <button @click="nextPage()">下一篇</button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      data1: [],
      // 所有页面的数据
      totalPage: 10,
      // 每页显示数量
      pageSize: 5,
      // 共几页
      pageNum: 2,
      // 当前显示的数据
      dataShow: "",
      // 默认当前显示第一页
      currentPage: 0
    };
  },
  methods: {
    Goup() {
      let totalPage = currentPage - 1;
      if (totalPage == 0) {
        console.log("已经是第一页");
        return false;
      }
    },
    nextPage() {
      let totalPage = currentPage + 1;
      if (totalPage == totalPage) {
        console.log("已经是最后一页");
      }
    }
  },
  mounted() {
   this.$axios.get("http://api.apiopen.top/musicDetails", {
        params: {
          userId: "999"
        },
        headers: {
          token: "jack"
        }
      })
      .then(res => {
        this.msg = res.data;
      })
      .catch(function(error) {
        console.log("error init." + error);
      });
  }
};
</script>
<style>
</style>