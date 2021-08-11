<template>
  <div>
    <div v-html="help" class="markdown-body"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import marked from 'marked';
import {serverPrefix} from '@/configs';

export default Vue.extend({
  name: 'Doc',
  props: {
    name: String,
    path: String,
  },
  data() {
    return {
      help: 'Loading...',
    };
  },
  methods: {
    update() {
      axios.get(serverPrefix + 'documentations/' + this.path).then(
        res => this.help = marked(res.data),
        () => {
          this.$message.warning('No help available for this mirror');
          this.help = 'No help available';
        },
      );
    }
  },
  watch: {
    path() {
      this.update();
    }
  },
  mounted() {
    this.update();
  }
});
</script>

<style scoped lang="less">
.markdown-body {
  text-align: left;
  padding: 20px;
}
</style>
