const menuRoutes = [
  {
    path: '/index',
    component: 'index',
  },
  {
    path: '/home',
    component: '@/pages/home',
  },
  {
    path: '/settings',
    component: '@/layouts/settingsLayout',
    routes: [
      { path: '/settings', redirect: '/settings/userinfo' },
      {
        path: '/settings/userinfo',
        component: '@/pages/settings/UserInfo',
      },
      {
        path: '/settings/testpage',
        component: '@/pages/settings/TestPage',
      },
      { component: '404.tsx' },
    ],
  },
];

export default [
  { path: '/login', component: 'Login' },
  { path: '/', redirect: '/index' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: menuRoutes,
  },
];
