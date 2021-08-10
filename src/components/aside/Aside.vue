<template>
  <div class="aside">
    <AsideLink v-for="(entry, index) in linkConfig" :key="index" :entries="entry"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {linkConfig} from '@/configs';
import AsideLink from './AsideLink.vue';
console.log(linkConfig);

export default Vue.extend({
  name: 'Aside',
  data() {
    return {linkConfig};
  },
  components: {AsideLink},
});
</script>

<style lang="less">
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix {
  :before, :after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
}

.box-card {
  padding: 10px;
  margin: 18px;
}
</style>
