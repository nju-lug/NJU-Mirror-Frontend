import {docConfig} from '@/configs';
import {RouteConfig} from 'vue-router';

export default docConfig.map(
  value => <RouteConfig>{
    path: value.route,
    name: value.name,
    component: () => import('@/components/Doc.vue'),
    props: {
      name: value.name,
      path: value.path,
    },
    meta: {
      title: `Help · ${value.name} - NJU Mirror`,
    }
  }
);
