<template>
  <div class="footer">
    <el-row align="left">
      <el-col :span="6">
        <img src="@/assets/logo.png" alt="bottom-logo"/>
      </el-col>
      <el-col :span="18" align="left">
        <span>Nanjing University Open Source Mirror</span>
        <el-divider/>
        <el-col :span="12">
          <el-row>
            本镜像站由
            <el-link href="https://sci.nju.edu.cn/">人工微结构科学与技术协同创新中心</el-link>&nbsp;
            <el-link href="https://www.yaoge123.com/">yaoge123</el-link>
            维护
          </el-row>
          <el-row>
            前端界面由
            <el-link href="https://git.nju.edu.cn/nju-lug">NJU LUG</el-link>
            制作
          </el-row>
          <el-row>苏ICP备10085945-1号 南信备568号</el-row>
        </el-col>
        <el-col :span="1"/>
        <el-col :span="11" align="right">
          <el-row>
            <el-link icon="el-icon-link" href="https://git.nju.edu.cn/iori_ichinose/nju-mirror-frontend/-/issues">
              反馈镜像站Bug
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BottomBar',
});
</script>

<style scoped lang="less">
.footer {
  height: 200px;
  width: 100%;
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
