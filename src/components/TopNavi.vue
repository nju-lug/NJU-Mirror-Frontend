<template>
  <div class="header">
    <el-menu :default-active="active"
             class="el-menu-demo"
             mode="horizontal"
             style="display: flex"
             router>
      <el-button type="text" @click="jumpTo('/')">
        <div class="logo-container">
          <img src="@/assets/logo.png" alt="Logo"/>
          <span>NJU Open Source Software Mirror</span>
        </div>
      </el-button>
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
  computed: {
    active(): string {
      return '/' + this.$route.path.split('/')[0];
    }
  },
  methods: {
    jumpTo(path: string) {
      if (this.$route.path == path) {
        return;
      }
      this.$router.push(path);
    }
  }
});
</script>

<style scoped lang="less">
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.logo-container {
  span, img {
    vertical-align: middle;
    display: inline-block;
    float: none;
  }

  span {
    padding-left: 15px;
    padding-right: 15px;
    font-size: large;
  }

  img {
    height: 30px;
    width: 30px;
  }
}
</style>
