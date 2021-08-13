<template>
  <div>
    <el-input placeholder="Search mirror"
              v-model="filter">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-table class="mirror-container"
              :cell-style="{padding: '4px'}"
              :data="show">
      <el-table-column prop="name"
                       label="Mirror Name"
                       min-width="200">
        <template slot-scope="scope">
          <el-link @click="handleEntry(scope.row)" :underline="false" type="primary">
            {{ scope.row.name }}
          </el-link>
          <el-tooltip class="item" effect="dark" :content="`${scope.row.name} 帮助文档`" placement="right-end">
            <el-link icon="el-icon-question" v-if="hasHelp(scope.row)" @click="handleHelp(scope.row)"/>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="status"
                       label="Sync Status"
                       width="150"
                       align="center">
        <template slot-scope="scope">
          <el-tag :type="tagType(scope.row.status)" style="width: 80px;text-align:left">
            <i v-if="scope.row.status === 'syncing'" class="el-icon-loading"/>
            <i v-else-if="scope.row.status === 'failed'" class="el-icon-error"/>
            <i v-else-if="scope.row.status === 'success'" class="el-icon-check"/>
            <i v-else class="el-icon-question"/>
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
import {SyncEntry, fetchEntries, docConfig} from '@/configs';

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
      default:
        return 'warning';
      }
    },
    update() {
      fetchEntries().then(
        res => {
          this.entries = res;
          this.entries.sort((a, b) => a.name.localeCompare(b.name));
        },
        err => this.$message.error(err.message),
      );
    },
    handleEntry(row: SyncEntry) {
      if (row.route) {
        this.$router.push(row.route);
      } else {
        window.location.href = row.path || `/${row.name}`;
      }
    },
    hasHelp(row: SyncEntry) {
      return docConfig.find(value => value.name == row.name);
    },
    handleHelp(row: SyncEntry) {
      this.$router.push(`/help/${row.name}`);
    },
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

<style lang="less">
.mirror-container {
  width: 100%;
  margin-top: 10px;
  td, // 去掉单元格的横线
  th.is-leaf{ // 去掉表头的横线
    border: none;
  }
  &::before{
    // 去掉最下面的那一条横线
    height: 0;
  }
}
</style>
