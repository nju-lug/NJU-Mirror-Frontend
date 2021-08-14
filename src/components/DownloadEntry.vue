<template>
  <div>
    <h1>Download {{ $route.params.title }}</h1>
    <el-table class="download-container"
              :show-header="false"
              :cell-style="{padding: '4px'}"
              :data="urls"
              :lazy="true">
      <el-table-column prop="name">
        <template slot-scope="scope">
          <el-link :href="scope.row.url" :underline="false">
            {{ scope.row.name }}
          </el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {ISOContent, ISOUrl} from '@/configs';

export default Vue.extend({
  name: 'DownloadEntry',
  computed: {
    urls(): Array<ISOUrl> {
      return (this.$store.state.isoContents as Array<ISOContent>).find(value =>
        value.distro == this.$route.params.title && value.category == this.$route.params.category)?.urls || [];
    },
  },
});
</script>

<style lang="less">
.download-container {
  width: 100%;
  margin: 20px;

  td, th.is-leaf {
    border: none;
  }

  &::before {
    height: 0;
  }

  .el-tag {
    width: 80px;
    text-align: center;
  }
}
</style>
