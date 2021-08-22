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
          <el-row>
            部分文档参考自
            <el-link href="https://github.com/tuna/mirror-web">tuna</el-link>
            并同样以GPLv2协议开源
          </el-row>
          <el-row>
            @人工微结构科学与技术协同创新中心
          </el-row>
        </el-col>
        <el-col :span="8" align="right">
          <el-row>
            <el-dropdown trigger="click" @command="redirect">
              <span class="el-dropdown-link">
                <i class="el-icon-message"/>
                反馈问题
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit-outline"
                                  command="https://github.com/nju-lug/NJU-Mirror-Issue">
                  镜像Bug
                </el-dropdown-item>
                <el-dropdown-item icon="el-icon-edit-outline"
                                  command="https://github.com/nju-lug/NJU-Mirror-Frontend/issues">
                  前端Bug
                </el-dropdown-item>
                <el-dropdown-item icon="el-icon-message"
                                  command="mailto:git+nju-lug-nju-mirror-frontend-2901-issue-@yaoge123.cn">
                  邮件反馈
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
          <el-row>
            <el-link icon="el-icon-paperclip" href="https://git.nju.edu.cn/nju-lug/nju-mirror-frontend">
              源码仓库
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

export default Vue.extend({
  name: 'BottomBar',
  computed: {
    isMobile(): boolean {
      return this.$store.state.isMobile;
    }
  },
  methods: {
    redirect(url: string) {
      window.location.href = url;
    }
  }
});
</script>

<style scoped lang="less">
.footer {
  height: 230px;
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

.el-dropdown-link {
  cursor: pointer;
}

.el-icon-arrow-down {
  font-size: 12px;
}
</style>
