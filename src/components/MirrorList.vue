<template>
  <div>
    <el-input placeholder="Search mirror"
              v-model="filter"
              @input="filterList">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-table class="mirror-container"
              :data="show"
              border
              style="width: 100%; margin-top: 10px">
      <el-table-column prop="name"
                       label="Mirror Name"
                       width="220">
      </el-table-column>
      <el-table-column prop="status"
                       label="Sync Status"
                       width="150">
      </el-table-column>
      <el-table-column prop="last_update"
                       label="Last Update"
                       width="250">
      </el-table-column>
      <el-table-column prop="size"
                       label="Mirror Size">
      </el-table-column>
      <el-table-column fixed="right"
                       label="Operations"
                       width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text">View</el-button>
        </template>
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
      console.log(this);
      return this.entries.filter(value => value.name.toLowerCase().includes(this.filter));
    }
  },
  methods: {
    handleClick(item: SyncEntry) {
      this.$router.replace(item.path);
    },
    filterList(keyword: string) {
      this.filter = keyword.toLowerCase();
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

<style scoped>
.mirror-container {
  justify-content: center;
  align-items: center;
}
</style>
