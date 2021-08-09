import Doc from '@/components/Doc.vue';
import config from '../config';

export default config.map(value => {
  return {
    path: value.route,
    name: value.name,
    component: Doc,
    props: {
      name: value.name,
      path: value.path
    }
  };
});
