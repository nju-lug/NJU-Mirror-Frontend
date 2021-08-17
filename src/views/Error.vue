<template>
  <div>
    <h1>404 Not found</h1>
    <h5>Unable to handle your request</h5>
    <el-row>
      <el-button @click="backward" icon="el-icon-back">Backward</el-button>
      <el-button @click="home" icon="el-icon-house">Home</el-button>
      <el-button @click="issue" icon="el-icon-edit-outline">Report bug</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

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
      window.location.href = 'https://github.com/nju-lug/NJU-Mirror-Issue';
    }
  },
  mounted() {
    axios.get(this.$route.path).then(
      () => undefined,
      err => this.$message.error(err),
    );
  },
});
</script>
