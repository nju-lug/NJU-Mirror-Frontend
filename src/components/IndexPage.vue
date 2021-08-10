<template>
  <div class="index-page-container">
    <img src="@/assets/index-logo.jpg" alt="logo-index"/>
    <h1>Welcome to NJU Mirror</h1>
    <p>
      For mirror usage, please check
      <router-link to="/help">Help</router-link>
      page.
    </p>
    <p>
      This mirror is maintained by <a href="https://www.yaoge123.com">@yaoge123</a>.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

img {
  border-radius: 35px;
  width: 150px;
  height: 150px;
  -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
}

.index-page-container {
  align-content: center;
  margin-top: 60px;
}
</style>
