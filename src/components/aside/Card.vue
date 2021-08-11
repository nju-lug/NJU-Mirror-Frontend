<template>
  <el-card class="box-card">
    <el-link slot="header" :href="card.url || 'javascript:void(0);'">
      {{ card.title }}
    </el-link>
    <div v-for="(entry, index) in card.links" :key="index" class="text item aside-link">
      <el-link :icon="entry.icon || 'el-icon-top-right'" type="info" :href="entry.url">{{ entry.title }}</el-link>
    </div>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue';
import {CardItem} from '@/configs';

export default Vue.extend({
  name: 'AsideLink',
  data() {
    return {
      card: {title: 'Loading', links: []} as CardItem,
    };
  },
  props: {
    entries: Promise,
  },
  beforeMount() {
    (this.entries as Promise<CardItem>).then(
      res => this.card = res,
      err => {
        this.$message.warning(err.message);
        this.card = {title: 'Error', links: []};
      },
    );
  }
});
</script>

<style scoped lang="less">
.aside-link {
  text-align: left;
}
</style>
