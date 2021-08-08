<template>
  <div class="header">
    <el-menu :default-active="$route.path"
             class="el-menu-demo"
             mode="horizontal"
             router>
      <el-menu-item v-for="(route, index) in routes"
                    :index="route.route"
                    :key="index">
        {{ route.name }}
      </el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TopNavi',
  data() {
    return {
      routes: [
        {route: '/', name: 'Home'},
        {route: '/mirrors', name: 'Mirrors'},
        {route: '/help', name: 'Help'},
        {route: '/about', name: 'About'},
      ],
    };
  },
});
</script>
