<template>
  <div class="help-page">
    <el-row>
      <el-col :span="isMobile ? 24 : 6" v-show="showNavi">
        <h5>Mirror Name</h5>
        <el-input placeholder="Search mirror"
                  v-model="filter"
                  prefix-icon="el-icon-search"
                  style="margin-bottom: 10px;"/>
        <el-menu :default-active="$route.fullPath" router>
          <el-menu-item v-for="entry in show"
                        :index="'/help/' + entry.route"
                        :key="entry.name"
                        @click="goTop">
            <span slot="title">{{ entry.name }}</span>
          </el-menu-item>
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
import Vue from 'vue';
import {docConfigs, DocItem} from '@/router';
import pubsub from 'pubsub-js';

export default Vue.extend({
  name: 'Help',
  data() {
    return {
      filter: '',
      isMobile: document.body.clientWidth < 600,
      entries: docConfigs,
    };
  },
  computed: {
    show(): Array<DocItem> {
      return this.entries.filter(value => value.name.toLowerCase().includes(this.filter.toLowerCase()));
    },
    showNavi(): boolean {
      return !this.isMobile || this.$route.path == '/help/index';
    },
  },
  methods: {
    goTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  },
  watch: {
    show() {
      if (this.show.length > 0) {
        const route = '/help/' + this.show[0].route;
        route != this.$route.path && this.$router.replace(route);
      }
    }
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

<style lang="less">
.el-menu-item {
  display: flex;
  align-items: center;
  padding-right: 20px;
}

.el-menu-item span {
  white-space: normal;
  word-break: break-all;
  line-height: 20px;
  flex: 1;
  text-align: left;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0;
}
</style>
