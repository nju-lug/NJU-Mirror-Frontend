import Vue from 'vue';
import Vuex from 'vuex';
import {DocItem, ISOContent} from '@/configs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobile: false,
    docConfig: [] as Array<DocItem>,
    isoContents: [] as Array<ISOContent>,
  },
  mutations: {
    updateWidth(context, value: boolean) {
      context.isMobile = value;
    },
    changeConfig(context, value: Array<DocItem>) {
      context.docConfig = value;
      context.docConfig.sort((a, b) => a.name.localeCompare(b.name));
    },
    updateISO(context, value: Array<ISOContent>) {
      context.isoContents = value;
      context.isoContents.sort((a, b) => a.distro.localeCompare(b.distro));
    },
  },
});
