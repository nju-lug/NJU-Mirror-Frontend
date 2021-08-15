<template>
  <el-menu :default-active="active"
           mode="horizontal"
           active-text-color="#63065f"
           menu-trigger="click"
           router>
    <el-menu-item>
      <el-link :underline="false" type="primary" href="/" class="logo-container">
        <img src="@/assets/logo.png" alt="Logo"/>
        <span>{{ isMobile ? 'NJU Mirror' : 'Nanjing University Mirror' }}</span>
      </el-link>
    </el-menu-item>

    <template v-if="!isMobile">
      <el-menu-item v-for="(route, index) in routes"
                    :key="index"
                    class="menu-item"
                    :index="route.route">
        {{ route.name }}
      </el-menu-item>
    </template>

    <el-submenu v-else index="collapse">
      <template slot="title">
        <i class="el-icon-s-fold"/>
      </template>
      <el-menu-item v-for="(item, index) in routes" :key="index"
                    :index="item.route">{{ item.name }}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TopNavi',
  data() {
    return {
      routes: [
        {route: '/', name: 'Mirrors'},
        {route: '/download', name: 'Download'},
        {route: '/help', name: 'Help'},
        {route: '/about', name: 'About'},
      ]
    };
  },
  computed: {
    active(): string {
      return '/' + this.$route.path.split('/')[1];
    },
    isMobile(): boolean {
      return this.$store.state.isMobile;
    }
  },
});
</script>

<style lang="less">
.el-menu--horizontal > .el-submenu {
  float: right;
}
</style>

<style scoped lang="less">
.el-col {
  border-radius: 4px;
}

.menu-item {
  font-weight: bold;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 15px;
    font-size: large;
  }

  img {
    height: 40px;
    width: 40px;
  }
}

.el-icon-s-fold {
  font-size: 28px;
  color: #63065f;
}
</style>
