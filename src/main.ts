import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'github-markdown-css/github-markdown.css';
import '@/assets/theme/index.css';
import App from '@/App.vue';
import router from '@/router';
import VueAnalytics from 'vue-analytics';

// GA初始化
if (process.env.VUE_APP_GA) {
  Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GA, // 从配置中读取
    disableScriptLoader: true, // 必须在html中完成初始化，这里显式禁止去下载ga脚本
    router, // 确保路由切换时可以自动统计
    autoTracking: {
      pageviewOnLoad: false // 当通过网址进来时已经GA在初始化时就发起一次pageview的统计，这里不要重复统计
    }
  });
}
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
