<template>
  <div>

    <div :class="dakai?'dakai':''" class="getCode" @click="dakai1" style="margin-top:20px">
      <div v-show="dakai">
        <div class="changfangxing">
          <div>
            <img src="../assets/jianhao.png" alt style="color:white;margin-left:-40px" />
          </div>
        </div>
        <div class="sanjiaoxing"></div>
        <div class="box1"></div>
      </div>
      <div class="box2" v-show="!dakai">
        <div class="changfangxing">
          <div>
            <img src="../assets/jiahao.png" alt style="color:white;margin-left:-40px" />
          </div>
        </div>
        <div class="sanjiaoxing"></div>
      </div>
    </div>

    <div :class="open?'open':''" class="getCode" @click="dakai2" style="margin-top:20px">
      <div v-show="open">
        <div class="changfangxing">
          <div>
            <img src="../assets/jianhao.png" alt style="color:white;margin-left:-40px" />
          </div>
        </div>
        <div class="sanjiaoxing"></div>
        <div class="box3"></div>
      </div>
      <div class="box2" v-show="!open">
        <div class="changfangxing">
          <div>
            <img src="../assets/jiahao.png" alt style="color:white;margin-left:-40px" />
          </div>
        </div>
        <div class="sanjiaoxing"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dakai: true,
      open:true
    };
  },
  methods: {
    dakai1() {
      this.dakai = !this.dakai;
    },
    dakai2(){
        this.open = !this.open;
    }
  }
};
</script>
<style >
.box1 {
  width: 400px;
  height: 100px;
  background: green;
}
.box3 {
     width: 400px;
  height: 300px;
  background:hotpink;
}
.changfangxing {
  width: 100px;
  height: 20px;
  background: red;
  border-radius:0px 20px 1px 0px;
}
/* .sanjiaoxing {
  width: 0;
  height: 0;
  border-top: 16px solid transparent;
  border-left: 16px solid red;
  border-bottom: 16px solid transparent;
  position: absolute;
  top: 54px;
  left: 107px;
} */
</style>