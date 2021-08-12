<template>
  <div class="aside">
    <el-card class="box-card">
      <el-row slot="header">快捷链接</el-row>
      <el-row>
        <MirrorDialog/>
      </el-row>
    </el-card>
    <AsideLink v-for="(entry, index) in linkConfig" :key="index" :entries="entry"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {linkConfig} from '@/configs';
import AsideLink from './Card.vue';
import MirrorDialog from '@/components/aside/MirrorDiglog.vue';

export default Vue.extend({
  name: 'Aside',
  data() {
    return {linkConfig};
  },
  components: {MirrorDialog, AsideLink},
});
</script>

<style lang="less">
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix {
  :before, :after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
}

.box-card {
  padding: 10px;
  margin: 18px;
}
</style>
