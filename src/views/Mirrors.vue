<template>
  <div class="mirrors-page">
    <h1>Mirror List</h1>
    <MirrorList/>
  </div>
</template>

<script>
import Vue from 'vue';
import MirrorList from '@/components/MirrorList';

export default Vue.extend({
  name: 'Mirrors',
  components: {MirrorList},
});
</script>

