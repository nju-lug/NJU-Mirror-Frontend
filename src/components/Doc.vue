<template>
  <div>
    <el-page-header class="doc-header" @back="$router.back()" :content="name"/>
    <div v-html="help" class="markdown-body"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import marked from 'marked';
import {serverPrefix, DocItem} from '@/configs';

export default Vue.extend({
  name: 'Doc',
  data() {
    return {
      help: 'Loading...',
    };
  },
  computed: {
    name(): string {
      return this.$route.params.distro;
    },
    path(): string | undefined {
      return (this.$store.state.docConfig as Array<DocItem>).find(value => value.name == this.name)?.path;
    }
  },
  watch: {
    path: {
      immediate: true,
      handler() {
        if (this.path == undefined) {
          this.$message.warning('No such mirror');
          this.help = `Sorry, but mirror ${this.name} is not included`;
          return;
        }
        axios.get(serverPrefix + 'documentations/' + this.path).then(
          res => this.help = marked(res.data),
          () => {
            this.$message.warning('No help available for this mirror');
            this.help = 'No help available';
          }
        );
      },
    },
  },
});
</script>

<style scoped lang="less">
.doc-header {
  margin-top: 10px; // padding to mirror name header
  margin-left: 20px; // padding to markdown-body
}

.markdown-body {
  text-align: left;
  padding: 20px;
}
</style>
