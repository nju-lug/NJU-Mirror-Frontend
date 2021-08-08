<template>
  <div class="aside">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>News</span>
        <el-link style="float: right" href="https://git.nju.edu.cn/nju-lug">NJUGit</el-link>
      </div>
      <div v-for="(entry, index) in entries" :key="index" class="text item">
        <el-link type="info" :href="entry.url">{{ entry.title }}</el-link>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface NewsItem {
  title: String,
  url: String,
  date: Date,
}

export default Vue.extend({
  name: 'Aside',
  data() {
    return {
      entries: Array<NewsItem>(),
    };
  },
  beforeMount() {
    this.entries = [
      {
        title: '田所浩二',
        url: 'https://www.baidu.com',
        date: new Date(1145141919810),
      }
    ];
  }
});
</script>

<style scoped lang="less">
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  padding: 10px;
  margin: 18px;
}
</style>
