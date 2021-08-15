<template>
  <div class="download-page">
    <el-row>
      <el-col :span="isMobile ? 24 : 6" v-show="showNavi">
        <h3>Content Name</h3>
        <el-input placeholder="Search content"
                  v-model="filter"
                  prefix-icon="el-icon-search"
                  style="margin-bottom: 10px;"/>
        <el-menu :default-active="decodeURI($route.path)" router menu-trigger="click">
          <el-submenu index="os">
            <template slot="title">
              <i class="el-icon-s-platform"/>
              <span>Linux Distros {{ show.os.length }}</span>
            </template>
            <el-menu-item v-for="entry in show.os" :index="`/download/os/${entry.distro}`" :key="entry.distro">
              {{ entry.distro }}
            </el-menu-item>
          </el-submenu>
          <el-submenu index="fonts">
            <template slot="title">
              <i class="el-icon-s-open"/>
              <span>Fonts {{ show.fonts.length }}</span>
            </template>
            <el-menu-item v-for="entry in show.fonts" :index="`/download/font/${entry.distro}`" :key="entry.distro">
              {{ entry.distro }}
            </el-menu-item>
          </el-submenu>
          <el-submenu index="apps">
            <template slot="title">
              <i class="el-icon-s-goods"/>
              <span>Apps {{ show.apps.length }}</span>
            </template>
            <el-menu-item v-for="entry in show.apps" :index="`/download/app/${entry.distro}`" :key="entry.distro">
              {{ entry.distro }}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="isMobile ? 24 : 18">
        <transition name="fade">
          <router-view/>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import type {ISOContent} from '@/configs';

export default Vue.extend({
  name: 'Download',
  data() {
    return {
      filter: '',
    };
  },
  mounted() {
    axios.get('/configs/iso.json').then(
      res => this.$store.commit('updateISO', res.data),
    );
  },
  computed: {
    contents(): Array<ISOContent> {
      return this.$store.state.isoContents;
    },
    show(): { apps: Array<ISOContent>, os: Array<ISOContent>, fonts: Array<ISOContent> } {
      return {
        apps: this.contents.filter(value => value.category == 'app' &&
          value.distro.toLowerCase().includes(this.filter.toLowerCase())),
        os: this.contents.filter(value => value.category == 'os' &&
          value.distro.toLowerCase().includes(this.filter.toLowerCase())),
        fonts: this.contents.filter(value => value.category == 'font' &&
          value.distro.toLowerCase().includes(this.filter.toLowerCase())),
      };
    },
    showNavi(): boolean {
      return !this.isMobile || this.$route.path == '/download/index';
    },
    isMobile(): boolean {
      return this.$store.state.isMobile;
    },
  },
});
</script>

<style lang="less">
.el-submenu__title {
  display: flex;
  align-items: center;
  padding-right: 20px;

  span {
    white-space: normal;
    word-break: break-all;
    line-height: 20px;
    flex: 1;
    text-align: left;
  }
}
</style>

<style scoped lang="less">
.el-menu-item {
  display: flex;
  align-items: center;
  padding-right: 20px;
  height: 40px;

  span {
    white-space: normal;
    word-break: break-all;
    line-height: 20px;
    flex: 1;
    text-align: left;
  }
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0;
}
</style>
