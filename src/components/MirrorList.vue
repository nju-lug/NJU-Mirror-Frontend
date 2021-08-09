<template>
  <div>
    <el-input placeholder="Search mirror"
              v-model="filter"
              @input="filterList">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-table class="mirror-container"
              :data="show"
              :row-class-name="rowType"
              style="width: 100%; margin-top: 10px;">
      <el-table-column prop="name"
                       label="Mirror Name"
                       min-width="200">
        <template slot-scope="scope">
          <el-link :href="scope.row.path" :underline="false" type="primary">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="status"
                       label="Sync Status"
                       width="150">
        <template slot-scope="scope">
          {{ scope.row.status }}
          <i v-if="scope.row.status === 'syncing'" class="el-icon-loading"></i>
          <i v-else-if="scope.row.status === 'failed'" class="el-icon-error"></i>
        </template>
      </el-table-column>
      <el-table-column prop="last_update"
                       label="Last Update"
                       width="250">
      </el-table-column>
      <el-table-column prop="size"
                       label="Mirror Size"
                       width="100">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {SyncEntry, fetchEntries} from '@/models';

export default Vue.extend({
  name: 'MirrorList',
  data() {
    return {
      timer_: 0,
      entries: Array<SyncEntry>(),
      filter: '',
    };
  },
  computed: {
    show(): Array<SyncEntry> {
      return this.entries.filter(value => value.name.toLowerCase().includes(this.filter.toLowerCase()));
    },
  },
  methods: {
    filterList(keyword: string) {
      this.filter = keyword;
    },
    rowType({row}: { row: SyncEntry }): string {
      switch (row.status) {
      case 'failed':
        return 'failed-row';
      case 'success':
        return 'succeeded-row';
      case 'syncing':
        return 'syncing-row';
      }
      return 'succeeded-row';
    },
    update() {
      fetchEntries().then(
        res => {
          this.entries = res;
          this.entries.sort((a, b) => a.name.localeCompare(b.name));
        },
        err => this.$message.error(err.message),
      );
    }
  },
  beforeMount() {
    this.update();
    this.timer_ = setInterval(() => this.update(), 60000);
  },
  beforeDestroy() {
    clearInterval(this.timer_);
  }
});
</script>

<style lang="less">
// This style can't be made scoped.
.el-table {
  .syncing-row {
    background-color: #ffffe1;
  }

  .succeeded-row {
    background-color: transparent;
  }

  .failed-row {
    background-color: #ffe2e1;
  }
}
</style>
