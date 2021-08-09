<template>
  <el-container id="container">
    <el-header>
      <TopNavi/>
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col :md="18">
          <transition name="fade">
            <router-view/>
          </transition>
        </el-col>
        <el-col :md="6" width="300px" v-show="showAside">
          <Aside/>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <BottomBar/>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue';

import TopNavi from '@/components/TopNavi.vue';
import BottomBar from '@/components/BottomBar.vue';
import Aside from '@/components/aside/Aside.vue';

export default Vue.extend({
  name: 'App',
  components: {Aside, BottomBar, TopNavi},
  computed: {
    showAside(): boolean {
      const path = this.$route.path;
      return path == '/' || path == '/mirrors';
    }
  }
});
</script>

<style lang="less">
body {
  display: flex;
  justify-content: center;
  font-family: Microsoft YaHei UI, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.el-container {
  // max-width: 1140px;
  min-height: auto;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0;
}

.el-header, .el-footer {
  text-align: center;
  line-height: 60px;
}

span {
  font-family: Microsoft YaHei UI, Helvetica, Arial, sans-serif;
}

code {
  font-family: Consolas, monospace;
}
</style>
