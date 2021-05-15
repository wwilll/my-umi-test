export default [
  // { path: '/login', component: 'login' },
  {
    path: '/',
    component: '@/layouts/index',
    // redirect: '/index',
    routes: [
      { path: '/index', component: 'index' },
      { path: '/home', component: '@/pages/home' },
      { path: '/testpage', component: '@/pages/testpage' },
      { component: '404.tsx' },
    ],
  },
];
