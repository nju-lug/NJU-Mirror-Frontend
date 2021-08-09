<template>
  <el-container id="container">
    <el-header>
      <TopNavi/>
    </el-header>
    <el-container>
      <el-main>
        <transition name="fade">
          <router-view/>
        </transition>
      </el-main>
      <el-aside width="300px" v-show="showAside">
        <Aside/>
      </el-aside>
    </el-container>
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
      return path == '/';
    }
  }
});
</script>

<style lang="less">
body {
  display: flex;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-container {
  max-width: 1140px;
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

* {
  font-family: Helvetica, Microsoft YaHei UI, Arial, sans-serif;
}

</style>
