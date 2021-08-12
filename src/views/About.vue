<template>
  <div class="index-page-container">
    <img src="@/assets/index-logo.jpg" alt="logo-index"/>
    <h1>NJU Open Source Mirror</h1>
    <h5>Made with <i class="el-icon-male"/> by NJU LUG</h5>
    <el-row>
      <a href="https://git.nju.edu.cn/nju-lug" target="_blank" rel="noopener">
        <el-button icon="el-icon-male">NJU LUG</el-button>
      </a>
      <a href="https://git.nju.edu.cn/nju-lug/nju-mirror-frontend" target="_blank" rel="noopener">
        <el-button icon="el-icon-paperclip">Source Code</el-button>
      </a>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'About',
  props: {
    msg: String
  },
});
</script>

<style scoped lang="less">
.index-page-container {
  img {
    border-radius: 35px;
    width: 200px;
    height: 200px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, .3); // add box-shadow rule
    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
    margin-top: 60px;
    margin-bottom: 30px;
  }

  span {
    margin-bottom: 30px;
  }

  a + a {
    margin-left: 10px;
  }
}
</style>
