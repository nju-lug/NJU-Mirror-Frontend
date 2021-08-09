<template>
  <div class="help-page">
    <el-row>
      <el-col :span="6">
        <h5>Mirror Name</h5>
        <el-input placeholder="Search mirror"
                  v-model="filter"
                  @input="filterList"
                  style="margin-bottom: 10px">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-menu :default-active="entries[0].route"
                 class="el-menu-vertical-demo"
                 router>
          <el-menu-item v-for="entry in entries"
                        :index="entry.route"
                        :key="entry.name">
            <span slot="title">{{ entry.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Help',
  data() {
    return {
      filter: '',
      entries: [
        {name: 'Arch Linux', route: '/help/archlinux'},
        {name: 'Debian', route: '/help/debian'},
      ]
    };
  },
  methods: {
    handleOpen(key: any, keyPath: any) {
      console.log(key, keyPath);
    },
    handleClose(key: any, keyPath: any) {
      console.log(key, keyPath);
    },
    filterList({key, keyIndex}: { key: any, keyIndex: number }) {
      console.log(key, keyIndex);
    }
  },
  mounted() {
    this.$router.replace(this.entries[0].route);
  }
});
</script>

<style scoped lang="less">
.el-menu-vertical-demo {
  margin-bottom: 10px;
}
</style>
