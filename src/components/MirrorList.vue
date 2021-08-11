<template>
  <div>
    <el-input placeholder="Search mirror"
              v-model="filter">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-table class="mirror-container"
              :data="show">
      <el-table-column prop="name"
                       label="Mirror Name"
                       min-width="200">
        <template slot-scope="scope">
          <el-link :href="scope.row.path" :underline="false" type="primary">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="status"
                       label="Sync Status"
                       width="150"
                       align="center">
        <template slot-scope="scope">
          <el-tag :type="tagType(scope.row.status)">
            <i v-if="scope.row.status === 'syncing'" class="el-icon-loading"/>
            <i v-else-if="scope.row.status === 'failed'" class="el-icon-error"/>
            <i v-else class="el-icon-check"/>
            {{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="lastUpdate" label="Last Update" width="150" align="center"/>
      <el-table-column prop="nextUpdate" label="Next Update" width="150" align="center"/>
      <el-table-column prop="size" label="Mirror Size" width="150" align="center"/>
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
      timer_: 0, // issue
      entries: Array<SyncEntry>(),
      filter: '',
    };
  },
  computed: {
    show(): Array<SyncEntry> {
      return this.entries.filter(
        value => value.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    },
  },
  methods: {
    tagType(status: string): string {
      switch (status) {
      case 'failed':
        return 'danger';
      case 'success':
        return 'success';
      case 'syncing':
        return 'warning';
      }
      return 'success';
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
  mounted() {
    this.update();
    this.timer_ = setInterval(() => this.update(), 60000);
  },
  beforeDestroy() {
    clearInterval(this.timer_);
  }
});
</script>

<style scoped lang="less">
.mirror-container {
  width: 100%;
  margin-top: 10px;
}
</style>
