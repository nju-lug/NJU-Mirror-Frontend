<template>
  <el-container id="container">
    <el-header>
      <TopNavi/>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="showAside ? 18 : 24">
          <transition name="fade">
            <router-view/>
          </transition>
        </el-col>
        <el-col :span="6" width="300px" v-show="showAside">
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
import pubsub from 'pubsub-js';

import TopNavi from '@/components/TopNavi.vue';
import BottomBar from '@/components/BottomBar.vue';
import Aside from '@/components/aside/Aside.vue';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      timer: false,
      screenWidth: document.body.clientWidth,
    };
  },
  components: {Aside, BottomBar, TopNavi},
  computed: {
    showAside(): boolean {
      const path = this.$route.path;
      return (path == '/' || path == '/mirrors') && !this.isMobile;
    },
    isMobile(): boolean {
      return this.screenWidth < 600;
    },
  },
  mounted() {
    window.onresize = () => {
      this.screenWidth = document.body.clientWidth;
    };
  },
  watch: {
    screenWidth(newValue: number) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = newValue;
        this.timer = true;
        setTimeout(() => {
          this.timer = false;
        }, 400);
      }
    },
    isMobile() {
      pubsub.publish('updateWidth', this.isMobile);
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
    padding-top: 70px;
    min-height: calc(100vh - 80px);
  }

  .el-header {
    position: fixed;
    width: 100%;
  }

  .el-header, .el-footer {
    text-align: center;
    line-height: 60px;
    z-index: 1500;
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
