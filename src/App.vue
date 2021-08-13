<template>
  <el-container id="container">
    <el-header>
      <TopNavi/>
    </el-header>
    <el-main class="main-container">
      <el-row>
        <el-col :span="showAside ? 18 : 24">
          <transition name="fade">
            <router-view/>
          </transition>
        </el-col>
        <el-col :span="6" v-show="showAside">
          <Aside/>
        </el-col>
      </el-row>
      <el-backtop/>
    </el-main>
    <el-footer height="200">
      <el-divider/>
      <BottomBar/>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue';
import pubsub from 'pubsub-js';

import TopNavi from '@/components/TopNavi.vue';
import BottomBar from '@/components/BottomBar.vue';
import Aside from '@/components/aside/Aside.vue';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      screenWidth: document.body.clientWidth,
    };
  },
  components: {Aside, BottomBar, TopNavi},
  computed: {
    showAside(): boolean {
      const path = this.$route.path;
      return (path == '/' || path == '/about') && this.screenWidth > 1000;
    },
    isMobile(): boolean {
      return this.screenWidth < 680;
    },
  },
  mounted() {
    window.onresize = () => {
      this.screenWidth = document.body.clientWidth;
    };
  },
  watch: {
    isMobile(newValue: boolean) {
      pubsub.publish('updateWidth', newValue);
    },
  },
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
  margin: 0;
}

.el-container {
  max-width: 1200px;

  .el-main {
    padding-top: 60px;
    min-height: calc(100vh - 290px);
  }

  .el-header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    text-align: center;
    z-index: 1500;

    .el-menu {
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(5px);
    }
  }

  .el-footer {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: medium;
  }
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0;
}

span {
  font-family: Microsoft YaHei UI, Helvetica, Arial, sans-serif;
}

code {
  font-family: Consolas, monospace;
}
</style>
