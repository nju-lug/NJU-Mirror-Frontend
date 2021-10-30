import Vue from 'vue';
import ElementUI from '@/configs/element-ui';
import 'github-markdown-css/github-markdown.css';
import '@/assets/theme/index.css';
import App from '@/App.vue';
import router from '@/router';
import VueAnalytics from 'vue-analytics';
import store from '@/store';

// GA初始化
if (process.env.VUE_APP_GA) {
  Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GA, // 从配置中读取
    router, // 确保路由切换时可以自动统计
  });
}
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
