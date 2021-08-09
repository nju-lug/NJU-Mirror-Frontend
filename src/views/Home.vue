<template>
  <div class="home-page">
    <IndexPage msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import IndexPage from '@/components/IndexPage.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    IndexPage
  }
});
</script>
