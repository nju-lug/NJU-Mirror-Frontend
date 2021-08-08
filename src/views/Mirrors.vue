<template>
  <div>
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

<style>

</style>
