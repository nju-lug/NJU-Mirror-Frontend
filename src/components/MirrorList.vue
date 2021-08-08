<template>
  <el-table class="mirror-container"
            :data="entries"
            border
            height="1000px"
            style="width: 100%">
    <el-table-column
      prop="name"
      label="Mirror Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="last_update"
      label="上次同步日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="size"
      label="Size">
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import Vue from 'vue';
import {SyncEntry, fetchEntries} from '@/models';

export default Vue.extend({
  name: 'MirrorList',
  data() {
    return {
      entries: Array<SyncEntry>(),
    };
  },
  beforeMount() {
    fetchEntries().then(
      res => {
        this.entries = res;
        this.entries.sort((a, b) => a.name.localeCompare(b.name));
      },
      err => this.$message.error(err.message),
    );
  }
});
</script>

<style scoped>
.mirror-container {
  justify-content: center;
  align-items: center;
}
</style>
