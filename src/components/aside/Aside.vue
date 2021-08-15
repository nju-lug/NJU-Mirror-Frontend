<template>
  <div class="aside">
    <News/>
    <AsideLink v-for="(entry, index) in linkConfig" :key="index" :entries="entry"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {linkConfig} from '@/configs';
import AsideLink from './Card.vue';
import News from './News.vue';

export default Vue.extend({
  name: 'Aside',
  data() {
    return {linkConfig};
  },
  components: {AsideLink, News},
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

.aside{
  text-align: left;
}
</style>
