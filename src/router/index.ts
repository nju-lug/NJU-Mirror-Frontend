import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import {convertRoute, DocItem} from '@/router/documentations';

Vue.use(VueRouter);

const xhr = new XMLHttpRequest();
xhr.open('GET', '/configs/documentations/index.json', false);
const docConfigs: Array<DocItem> = xhr.status == 200 ? xhr.response : [];
const docRoutes = docConfigs.map(convertRoute);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Mirrors',
    component: () => import('@/views/Mirrors.vue'),
    meta: {
      title: 'NJU Mirror',
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/Help.vue'),
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/components/HelpIndex.vue'),
        children: docRoutes,
        meta: {
          title: 'Help · NJU Mirror'
        },
      }],
    meta: {
      title: 'Help · NJU Mirror',
    },
    redirect: '/help/index',
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: 'About · NJU Mirror',
    }
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('@/views/Error.vue'),
    meta: {
      title: 'Error · NJU Mirror',
    }
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

router.onError(() => window.location.replace('/error'));

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title || 'NJU Mirror';
  next();
});

export {docConfigs, DocItem};
export default router;
