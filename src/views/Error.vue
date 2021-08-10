<template>
  <div>
    <h1>404 Not found</h1>
    <h5>Unable to handle your request</h5>
    <el-row>
      <el-button @click="backward" icon="el-icon-back">Backward</el-button>
      <el-button @click="home" icon="el-icon-house">Home</el-button>
      <el-button @click="issue" icon="el-icon-link">Contact us</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Error',
  methods: {
    home() {
      this.$router.replace('/');
    },
    backward() {
      this.$router.back();
    },
    issue() {
      window.location.href = 'https://git.nju.edu.cn/iori_ichinose/nju-mirror-frontend/-/issues';
    }
  },
  mounted() {
    this.$message.error('Unable to reach the page you required');
  }
});
</script>
