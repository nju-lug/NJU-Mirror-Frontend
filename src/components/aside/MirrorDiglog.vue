<template>
  <div class="dialog-container">
    <el-link @click="show = true" type="info" icon="el-icon-download">Download Linux</el-link>
    <el-dialog title="Download Linux" :visible.sync="show" width="400px">
      <el-form :model="selected">
        <el-form-item label="Distro" label-width="100px" align="left">
          <el-select v-model="distro.name">
            <el-option v-for="(d, index) in distros" :value="d.name" :key="index"/>
          </el-select>
        </el-form-item>
        <el-form-item label="Architecture" label-width="100px" align="left">
          <el-select v-model="distro.version">
            <el-option v-for="(d, index) in selected.mirrors" :value="d.name" :key="index"/>
          </el-select>
        </el-form-item>
        <div class="dialog-footer">
          <el-button @click="show = false">Cancel</el-button>
          <el-button type="primary" @click="downloadMirror" :disabled="url === ''">Download</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

interface ISOConfig {
  name: string,
  mirrors: Array<{ name: string, url: string }>
}

export default Vue.extend({
  name: 'MirrorDialog',
  data() {
    return {
      show: false,
      distro: {} as { name: string, version: string },
      distros: [] as Array<ISOConfig>,
    };
  },
  computed: {
    selected(): ISOConfig {
      return this.distros.find(value => value.name == this.distro.name) || {name: '请选择...', mirrors: []};
    },
    url(): string {
      return this.selected.mirrors.find(value => value.name == this.distro.version)?.url || '';
    }
  },
  methods: {
    downloadMirror() {
      this.show = false;
      window.open(this.url);
    }
  },
  mounted() {
    axios.get('/configs/iso.json').then(
      res => this.distros = res.data,
      err => this.$message.error(err),
    );
  },
});
</script>

<style scoped lang="less">
.dialog-container {
  text-align: left;

  .dialog-footer {
    text-align: center;
  }
}
</style>
