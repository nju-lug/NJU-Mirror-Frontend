<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Links</span>
    </div>
    <div v-for="(entry, index) in entries" :key="index" class="text item">
      <el-link :icon="entry.icon || 'el-icon-top-right'" type="info" :href="entry.url">{{ entry.title }}</el-link>
    </div>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue';

interface LinkItem {
  title: String,
  url: String,
  icon?: string,
}

export default Vue.extend({
  name: 'AsideLink', data() {
    return {
      entries: Array<LinkItem>(),
    };
  },
  beforeMount() {
    this.entries = [
      {
        title: 'NJU GitLab',
        url: 'https://git.nju.edu.cn',
      },
      {
        title: 'NJU TeX Online',
        url: 'https://tex.nju.edu.cn',
        icon: 'el-icon-notebook-2',
      },
      {
        title: 'NJU Box',
        url: 'https://box.nju.edu.cn',
        icon: 'el-icon-upload',
      },
    ];
  }
});
</script>

<style scoped>
</style>
