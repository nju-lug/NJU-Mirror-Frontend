import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Mirrors',
    component: () => import('@/views/Mirrors.vue'),
    meta: {
      title: 'Mirrors · NJU Mirror',
    },
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/Help.vue'),
    children: [
      {
        path: 'index',
        name: 'HelpIndex',
        component: () => import('@/components/HelpIndex.vue'),
        meta: {
          title: 'Help · NJU Mirror',
        },
      },
      {
        name: 'Doc',
        path: ':distro',
        component: () => import('@/components/Doc.vue'),
        meta: {
          title: 'Help · NJU Mirror',
        },
      },
    ],
    meta: {
      title: 'Help · NJU Mirror',
    },
    redirect: '/help/index',
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import('@/views/Download.vue'),
    children: [
      {
        path: 'index',
        name: 'DownloadIndex',
        component: () => import('@/components/HelpIndex.vue'),
        meta: {
          title: 'Download · NJU Mirror',
        },
      },
      {
        name: 'Entry',
        path: ':category/:title',
        component: () => import('@/components/DownloadEntry.vue'),
        meta: {
          title: 'Download · NJU Mirror',
        },
      },
    ],
    meta: {
      title: 'Download · NJU Mirror',
    },
    redirect: '/download/index',
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: 'About · NJU Mirror',
    },
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('@/views/Error.vue'),
    meta: {
      title: 'Error · NJU Mirror',
    },
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
