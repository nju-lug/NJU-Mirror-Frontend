<template>
  <div class="help-page">
    <el-row>
      <el-col :span="6">
        <h5>Mirror Name</h5>
        <el-input placeholder="Search mirror"
                  v-model="filter"
                  @change="filterList"
                  style="margin-bottom: 10px">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-menu :default-active="$route.fullPath"
                 class="el-menu-vertical-demo"
                 router>
          <el-menu-item v-for="entry in show"
                        :index="'/help/' + entry.route"
                        :key="entry.name"
                        @click="goTop">
            <span slot="title">{{ entry.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import config, {DocItem} from '@/config';

export default Vue.extend({
  name: 'Help',
  data() {
    return {
      filter: '',
      entries: config,
    };
  },
  computed: {
    show(): Array<DocItem> {
      return this.entries.filter(value => value.name.toLowerCase().includes(this.filter.toLowerCase()));
    }
  },
  methods: {
    filterList(input: string) {
      this.filter = input;
    },
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
});
</script>

<style scoped lang="less">
.el-menu-vertical-demo {
  margin-bottom: 10px;
}
</style>
