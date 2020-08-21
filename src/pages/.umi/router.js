import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from '/Users/likeju/workSpace/cms-base-project/base-ant-design-pro/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "component": _dvaDynamic({
  
  component: () => import('../../layouts/UserLayout'),
  LoadingComponent: require('/Users/likeju/workSpace/cms-base-project/base-ant-design-pro/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/user",
        "component": _dvaDynamic({
  
  component: () => import('../Welcome'),
  LoadingComponent: require('/Users/likeju/workSpace/cms-base-project/base-ant-design-pro/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/likeju/workSpace/cms-base-project/base-ant-design-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import('../../layouts/BasicLayout'),
  LoadingComponent: require('/Users/likeju/workSpace/cms-base-project/base-ant-design-pro/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/",
        "redirect": "/welcome",
        "exact": true
      },
      {
        "path": "/welcome",
        "name": "welcome",
        "icon": "smile",
        "component": _dvaDynamic({
  
  component: () => import('../Welcome'),
  LoadingComponent: require('/Users/likeju/workSpace/cms-base-project/base-ant-design-pro/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/test",
        "name": "test",
        "component": _dvaDynamic({
  
  component: () => import('../test'),
  LoadingComponent: require('/Users/likeju/workSpace/cms-base-project/base-ant-design-pro/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "name": "二级路由测试",
        "path": "/",
        "icon": "sun",
        "auth": [
          "",
          ""
        ],
        "routes": [
          {
            "path": "/pageA",
            "name": "2级A",
            "icon": "smile",
            "component": _dvaDynamic({
  
  component: () => import('../pageA/a'),
  LoadingComponent: require('/Users/likeju/workSpace/cms-base-project/base-ant-design-pro/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/pageB",
            "name": "2级B",
            "icon": "smile",
            "component": _dvaDynamic({
  
  component: () => import('../test'),
  LoadingComponent: require('/Users/likeju/workSpace/cms-base-project/base-ant-design-pro/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/likeju/workSpace/cms-base-project/base-ant-design-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": () => React.createElement(require('/Users/likeju/workSpace/cms-base-project/base-ant-design-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/likeju/workSpace/cms-base-project/base-ant-design-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
