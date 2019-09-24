

 data() {
    return {
      // 假设这是后台传来的数据来源
      data: [],
      // 所有页面的数据
      totalPage: [],
      // 每页显示数量
      pageSize: 5,
      // 共几页
      pageNum: 1,
      // 当前显示的数据
      dataShow: "",
      // 默认当前显示第一页
      currentPage: 0
    };
  },
步骤1：计算页数

    // 这里简单模拟一下后台传过来的数据
    for (let i = 0; i < 601; i++) {
      this.data.push({ name: "liu" ,look:"very handsome"});
    }
    // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
    this.pageNum = Math.ceil(this.data.length / this.pageSize) || 1;
步骤二：根据页数对数据分组，并存进每一页

   for (let i = 0; i < this.pageNum; i++) {
      // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
      // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为5， 则第一页是1-5(对slice操作来说是0-5)条，第二页是6-10(对slice操作来说是5-10)条...
      this.totalPage[i] = this.data.slice(this.pageSize * i, this.pageSize * (i + 1))
    }
步骤三：设置默认显示页，上一页下一个，只需要切换当前页面的索引值就行了

    // 当前显示的内容
    this.dataShow = this.totalPage[this.currentPage];
    // 上一页和下一页
    // 下一页
    nextPage() {
      if (this.currentPage == this.pageNum - 1) return ;
      this.dataShow = this.totalPage[++this.currentPage];
    },
    // 上一页
    prePage() {
      if (this.currentPage == 0) return ;
      this.dataShow = this.totalPage[--this.currentPage];

