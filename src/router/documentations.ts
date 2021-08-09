import Doc from '@/components/Doc.vue';

export default [
  {
    path: 'archlinux',
    component: Doc,
    props: {
      name: 'Arch Linux',
      path: 'arch.md',
    }
  },
  {
    path: 'debian',
    component: Doc,
    props: {
      name: 'Debian',
      path: 'debian.md'
    }
  }
];
