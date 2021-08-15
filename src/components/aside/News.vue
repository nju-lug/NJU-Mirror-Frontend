<template>
  <el-card class="box-card news-container">
    <span slot="header">
      News
    </span>
    <el-link v-for="(entry, index) in contents"
             :key="index"
             @click="handleClick(entry)">
      {{ getDate(entry.time) }} - {{ entry.name }}
    </el-link>
    <el-dialog :title="selected.name"
               :visible.sync="show">
      <div v-html="selected.content"/>
    </el-dialog>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import moment from 'moment';
import marked from 'marked';

import {NewsEntry} from '@/configs';

export default Vue.extend({
  name: 'MirrorDialog',
  data() {
    return {
      selected: {name: '', time: 0, content: ''} as NewsEntry,
      contents: [] as Array<NewsEntry>,
      show: false,
    };
  },
  methods: {
    handleClick(entry: NewsEntry) {
      this.selected = entry;
      this.show = true;
    },
    getDate(ts: number): string {
      return moment.unix(ts).format('YYYY.M.D');
    }
  },
  watch: {
    selected(newValue: NewsEntry) {
      axios.get(`/configs/news/${newValue.content}`).then(
        res => newValue.content = marked(res.data),
        err => {
          this.$message.warning(`Unable to fetch news: ${err.message}`);
          newValue.content = '<h2>Error loading news</h2>';
        },
      );
    },
  },
  mounted() {
    axios.get('/configs/news/index.json').then(
      res => this.contents = (res.data as Array<NewsEntry>).slice(0, 5),
      err => this.$message.warning(`Couldn't fetch news: ${err.message}`),
    );
  },
});
</script>

<style scoped lang="less">
.news-container {
  .dialog-footer {
    text-align: center;
  }
}
</style>
