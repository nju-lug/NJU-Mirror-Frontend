<template>
  <div class="footer">
    <el-row align="left">
      <el-col :span="6" v-show="!isMobile">
        <img src="@/assets/logo.png" alt="bottom-logo"/>
      </el-col>
      <el-col :span="isMobile ? 24 : 18" align="left">
        <span>Nanjing University Open Source Mirror</span>
        <el-divider/>
        <el-col :span="16">
          <el-row>
            本镜像站由
            <el-link href="https://www.yaoge123.com/">yaoge123</el-link>
            维护
          </el-row>
          <el-row>
            前端界面由
            <el-link href="https://git.nju.edu.cn/nju-lug">NJU LUG</el-link>
            制作
          </el-row>
        </el-col>
        <el-col :span="8" align="right">
          <el-row>
            <el-link icon="el-icon-link" href="https://git.nju.edu.cn/nju-lug/nju-mirror-frontend/-/issues">
              反馈Bug
            </el-link>
          </el-row>
          <el-row>
            <el-link icon="el-icon-male" href="https://git.nju.edu.cn/nju-lug">
              加入我们
            </el-link>
          </el-row>
        </el-col>
      </el-col>
    </el-row>
    <el-row>苏ICP备10085945-1号 南信备568号</el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pubsub from 'pubsub-js';

export default Vue.extend({
  name: 'BottomBar',
  data() {
    return {
      isMobile: document.body.clientWidth < 600,
    };
  },
  mounted() {
    pubsub.subscribe('updateWidth', (_: any, value: boolean) => {
      this.isMobile = value;
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe('updateWidth');
  },
});
</script>

<style scoped lang="less">
.footer {
  height: 200px;
  width: 90%;
  margin: 0 auto;
  alignment: top;
}

img {
  width: 170px;
  height: 170px;
}

span {
  text-align: left;
}

.el-row {
  margin-bottom: 10px;
}
</style>
