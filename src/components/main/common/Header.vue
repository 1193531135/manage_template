<template>
  <div class="bgcdiv">
    <div class="tit_text">通用管理系统</div>
    <div class="user">
      <img class="img1" :src="headeimg" />
      <div class="username">游客</div>
      <div class="exit">退出</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
      return{
          headeimg:require('../../../assets/default_head.jpg')
      }
  }
};
</script>

<style scoped>
.bgcdiv {
  background-color: rgb(59, 140, 255);
  height: 65px;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
}
.bgcdiv > div {
  float: left;
  color: white;
  line-height: 65px;
}
.img1 {
  height: 45px;
  width: 45px;
  display: block;
  float: left;
  border-radius: 50%;
  padding: 10px 0;
}
.user {
  float: right !important;
  width: 200px;
  font-size: 14px;
}
.user > div {
  float: left;
}
.exit{
    margin-left: 20px;
}
.username{
    margin-left: 15px;
}
</style>