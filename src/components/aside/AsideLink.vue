<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      {{ entries.title }}
    </div>
    <div v-for="(entry, index) in entries.links" :key="index" class="text item aside-link">
      <el-link :icon="entry.icon || 'el-icon-top-right'" type="info" :href="entry.url">{{ entry.title }}</el-link>
    </div>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue';
// import {CardItem} from '@/configs';

export default Vue.extend({
  name: 'AsideLink',
  props: {
    entries: Object,
  },
  mounted() {
    console.log(this.entries);
  }
});
</script>

<style scoped lang="less">
.aside-link {
  text-align: left;
}
</style>
