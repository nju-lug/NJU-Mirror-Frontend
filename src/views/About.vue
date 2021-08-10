<template>
  <div class="index-page-container">
    <img src="@/assets/index-logo.jpg" alt="logo-index"/>
    <h1>NJU Open Source Mirror</h1>
    <h5>Made with <i class="el-icon-male"/> by NJU LUG</h5>
    <el-row>
      <el-button icon="el-icon-male"
                 @click="redirect('https://git.nju.edu.cn/nju-lug/')">
        NJU LUG
      </el-button>
      <el-button icon="el-icon-paperclip"
                 @click="redirect('https://git.nju.edu.cn/iori_ichinose/nju-mirror-frontend')">
        Source Code
      </el-button>
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
  methods: {
    redirect(url: string) {
      window.location.href = url;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index-page-container {
  img {
    border-radius: 35px;
    width: 200px;
    height: 200px;
    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
    margin-top: 60px;
    margin-bottom: 30px;
  }

  span {
    margin-bottom: 30px;
  }
}
</style>
