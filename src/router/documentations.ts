import Doc from '@/components/Doc.vue';
import config from '../config';
import {RouteConfig} from 'vue-router';

export default config.map(value => {
  return <RouteConfig>{
    path: value.route,
    name: value.name,
    component: Doc,
    props: {
      name: value.name,
      path: value.path,
    },
    meta: {
      title: `Help · ${value.name} - NJU Mirror`,
    }
  };
});
