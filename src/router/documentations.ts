import {RouteConfig} from 'vue-router';

export interface DocItem {
  name: string,
  path: string,
  route: string,
}

export function convertRoute(value: DocItem): RouteConfig {
  return {
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
  };
}
