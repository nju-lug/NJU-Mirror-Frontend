<template>
  <el-menu :default-active="active"
           mode="horizontal"
           active-text-color="#63065f"
           router>
    <el-menu-item>
      <el-link :underline="false" type="primary" href="/" class="logo-container">
        <img src="@/assets/logo.png" alt="Logo"/>
        <span>NJU Mirror</span>
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

    <el-submenu v-else
                index="colapse">
      <template slot="title">
        <i class="el-icon-s-fold" style="font-size:28px;"></i>
      </template>
      <el-menu-item v-for="(item,key) in routes" :key="key"
                    :index="item.route">{{ item.name }}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import Vue from 'vue';
import pubsub from 'pubsub-js';

export default Vue.extend({
  name: 'TopNavi',
  data() {
    return {
      isMobile: document.body.clientWidth < 600,
      routes: [
        {route: '/', name: 'Home'},
        {route: '/mirrors', name: 'Mirrors'},
        {route: '/help', name: 'Help'},
        {route: '/about', name: 'About'},
      ]
    };
  },
  computed: {
    active(): string {
      return '/' + this.$route.path.split('/')[0];
    },
  },
  mounted() {
    pubsub.subscribe('updateWidth', (_: any, value: boolean) => {
      this.isMobile = value;
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe('updateWidth');
  }
});
</script>

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
</style>
