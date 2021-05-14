export default [
  { path: '/login', component: 'login' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/list', component: 'list' },
      { path: '/admin', component: 'admin' },
    ],
  },
];
