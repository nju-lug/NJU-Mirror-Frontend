<template>
  <div>
    <h1>Documentation of {{ name }} Mirror</h1>
    <div v-html="help" class="document-container markdown-body"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import marked from 'marked';

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
      axios.get('/documentations/' + this.path).then(
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

<style scoped>
.document-container {
  text-align: left;
  padding: 20px;
}
</style>
