import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import documentations from './documentations';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Mirrors',
    component: () => import('@/views/Mirrors.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/Help.vue'),
    children: documentations,
    redirect: '/help/archlinux',
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('@/views/Error.vue'),
  },
  {
    path: '*',
    redirect: '/error',
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.onError(() => {
  window.location.replace('/err');
});

export default router;
