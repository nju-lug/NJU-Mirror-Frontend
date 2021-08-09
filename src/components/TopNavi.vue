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
                    :index="item.route">{{item.name}}
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
      screenWidth: document.body.clientWidth,
      timer: false,
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
    isMobile():boolean{
      return this.screenWidth<600;
    }
  },
  watch: {
    screenWidth(newValue:number) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = newValue;
        this.timer = true;
        setTimeout(() => {
          //console.log(this.screenWidth);
          this.timer = false;
        }, 400);
      }
    }
  },
  mounted(){
    window.onresize = () => {
      this.screenWidth = document.body.clientWidth;
    };
  },
});
</script>

<style scoped lang="less">
// .el-row {
//   margin-bottom: 20px;

//   &:last-child {
//     margin-bottom: 0;
//   }
// }

.el-col {
  border-radius: 4px;
}
.menu-item{
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
