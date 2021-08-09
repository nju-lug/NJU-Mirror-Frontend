<template>
  <div>
    Error
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'error',
  mounted() {
    this.$message.error('Unable to reach the page you required');
  }
});
</script>

<style scoped>
</style>
