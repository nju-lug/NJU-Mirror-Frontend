<template>
  <div>Error 404</div>
</template>

<script>
export default {
  name: 'error',
  mounted() {
    this.$message.error('Unable to reach the page you required');
  }
};
</script>

<style scoped>
</style>
