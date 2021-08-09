<template>
  <div class="aside">
    <AsideLink/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AsideLink from './AsideLink.vue';

export default Vue.extend({
  name: 'Aside',
  components: {AsideLink},
});
</script>

<style lang="less">
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix {
  :before, :after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
}

.box-card {
  padding: 10px;
  margin: 18px;
}
</style>
