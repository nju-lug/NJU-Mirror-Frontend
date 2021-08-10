import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import documentations from './documentations';

Vue.use(VueRouter);

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
    children: documentations,
    redirect: '/help/archlinux',
    meta: {
      title: 'Help · NJU Mirror',
    }
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
    path: '/error',
    name: 'Error',
    component: () => import('@/views/Error.vue'),
    meta: {
      title: 'Error · NJU Mirror',
    }
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

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title || 'NJU Mirror';
  next();
});

export default router;
