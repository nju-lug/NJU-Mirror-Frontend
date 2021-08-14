import Vue from 'vue';
import Vuex from 'vuex';
import {DocItem} from '@/configs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobile: document.body.clientWidth < 680,
    docConfig: [] as Array<DocItem>,
  },
  mutations: {
    updateWidth(context, value) {
      context.isMobile = value;
    },
    changeConfig(context, value) {
      context.docConfig = value;
    }
  }
});
