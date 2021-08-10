<template>
  <div>
    <h1>404 Not found</h1>
    <el-button @click="redirect">
      Home page
    </el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Error',
  methods: {
    redirect() {
      this.$router.replace('/');
    }
  },
  mounted() {
    this.$message.error('Unable to reach the page you required');
  }
});
</script>

<style scoped>
</style>
