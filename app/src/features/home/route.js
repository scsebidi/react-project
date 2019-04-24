import {
  DefaultPage,
  Register,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: DefaultPage,
      isIndex: true,
    },
    { path: 'Register', name: 'Register', component: Register },
  ],
};
