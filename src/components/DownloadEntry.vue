<template>
  <div>Download {{ $route.params.title }} {{ $route.params.category }}</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DownloadEntry',
});
</script>

<style scoped>

</style>
