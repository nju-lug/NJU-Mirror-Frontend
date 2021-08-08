<template>
  <div>
    Document of {{ name }}
    <span>{{ description }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Doc',
  props: {
    name: String,
    description: String,
  }
});
</script>

<style scoped>

</style>
