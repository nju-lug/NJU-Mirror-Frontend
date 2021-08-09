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
              style="width: 100%; margin-top: 10px">
      <el-table-column prop="name"
                       label="Mirror Name">
        <template slot-scope="scope">
          <el-button @click="$router.push(scope.row.path)" type="text">{{ scope.row.name }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="status"
                       label="Sync Status"
                       width="150">
        <template slot-scope="scope">
          {{ scope.row.status }}
          <i v-if="scope.row.status === 'syncing'" class="el-icon-loading"></i>
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
    handleClick(item: SyncEntry) {
      this.$router.push(item.path);
    },
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
    }
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
