import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import documentations from './documentations';

documentations.push({
  path: 'index',
  name: 'Index',
  component: () => import('@/components/HelpIndex.vue'),
  meta: {
    title: 'Help · NJU Mirror'
  },
});

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
  routes
});

router.onError(() => {
  window.location.replace('/err');
});

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title || 'NJU Mirror';
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  next();
});

export default router;
