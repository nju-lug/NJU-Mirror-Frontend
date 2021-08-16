<template>
  <div>
    <el-input placeholder="Search mirror"
              v-model="filter"
              prefix-icon="el-icon-search"/>
    <el-table class="mirror-container"
              :cell-style="{padding: '4px'}"
              :data="show"
              :lazy="true">
      <el-table-column prop="name"
                       label="Mirror Name"
                       min-width="170">
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
          <el-tag :type="tagType(scope.row.status)">
            <i :class="iconType(scope.row.status)"/>
            {{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column v-if="!isMobile" prop="lastUpdate" label="Last Update" width="170" align="center"/>
      <el-table-column v-if="!isMobile" prop="nextUpdate" label="Next Update" width="170" align="center"/>
      <el-table-column v-if="!isMobile" prop="size" label="Mirror Size" width="150" align="center"/>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {SyncEntry, fetchEntries, DocItem} from '@/configs';

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
      return this.entries.filter(
        value => value.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    },
    docConfig(): Array<DocItem> {
      return this.$store.state.docConfig;
    },
    isMobile(): boolean {
      return this.$store.state.isMobile;
    },
  },
  methods: {
    tagType(status: string): string {
      switch (status) {
      case 'failed':
        return 'danger';
      case 'success':
        return 'success';
      default:
        return 'warning';
      }
    },
    iconType(status: string): string {
      switch (status) {
      case 'failed':
        return 'el-icon-error';
      case 'success':
        return 'el-icon-check';
      case 'syncing':
        return 'el-icon-loading';
      default:
        return 'el-icon-question';
      }
    },
    update() {
      fetchEntries().then(
        res => this.entries = res.sort((a, b) => a.name.localeCompare(b.name)),
        () => this.$message.error('Unable to fetch mirrors'),
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
      return this.docConfig.find(value => value.name == row.name);
    },
    handleHelp(row: SyncEntry) {
      this.$router.push(`/help/${row.name}`);
    },
  },
  mounted() {
    this.update();
    this.timer_ = setInterval(() => this.update(), 120000);
  },
  beforeDestroy() {
    clearInterval(this.timer_);
  },
});
</script>

<style lang="less">
.mirror-container {
  width: 100%;
  margin-top: 10px;

  td, // 去掉单元格的横线
  th.is-leaf { // 去掉表头的横线
    border: none;
  }

  &::before {
    // 去掉最下面的那一条横线
    height: 0;
  }

  .el-tag {
    width: 80px;
    text-align: center;
  }
}
</style>
