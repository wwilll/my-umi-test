import './global/global.less';

let extraRoutes;

export function patchRoutes({ routes }: { routes: any }) {
  // merge(routes, extraRoutes);
  // 直接修改routes
  // console.log(routes);
}

export function render(oldRender: Function) {
  // fetch('/api/routes').then(res=>res.json()).then((res) => {
  //   extraRoutes = res.routes;
  //   oldRender();
  // })
  oldRender();
}

export function onRouteChange({
  location,
  routes,
  action,
  matchedRoutes,
}: {
  location: any;
  routes: any;
  action: any;
  matchedRoutes: any;
}) {
  // 做埋点
  // bacon(location.pathname);

  // 设置标题
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
  }
}
