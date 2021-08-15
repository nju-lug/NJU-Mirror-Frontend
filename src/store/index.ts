import Vue from 'vue';
import Vuex from 'vuex';
import {DocItem, ISOContent} from '@/configs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobile: document.body.clientWidth < 750,
    docConfig: [] as Array<DocItem>,
    isoContents: [] as Array<ISOContent>,
  },
  mutations: {
    updateWidth(context, value) {
      context.isMobile = value;
    },
    changeConfig(context, value) {
      context.docConfig = value;
    },
    updateISO(context, value) {
      context.isoContents = value;
    }
  }
});
