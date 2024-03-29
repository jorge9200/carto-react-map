import { lazy } from 'react';
import ProtectedRoute from 'components/common/ProtectedRoute';
import DefaultView from 'components/common/DefaultView';

const Main = lazy(
  () => import(/* webpackPrefetch: true */ 'components/views/main/Main'),
);
const NotFound = lazy(() => import('components/views/NotFound'));
const Login = lazy(() => import('components/views/login/Login'));
const Stores = lazy(() => import('components/views/Stores'));
const Social = lazy(() => import('components/views/Social'));
// [hygen] Import views

export const ROUTE_PATHS = {
  LOGIN: '/login',
  DEFAULT: '/',
  NOT_FOUND: '/404',
  STORES: '/stores',
  SOCIAL: '/social',
  // [hygen] Add path routes
};

const routes = [
  {
    path: ROUTE_PATHS.DEFAULT,
    element: (
      <ProtectedRoute>
        <DefaultView>
          <Main />
        </DefaultView>
      </ProtectedRoute>
    ),
    children: [
      // { path: '/', element: <Navigate to='/<your default view>' /> },
      { path: ROUTE_PATHS.STORES, element: <Stores /> },
      { path: ROUTE_PATHS.SOCIAL, element: <Social /> },
      // [hygen] Add routes
    ],
  },
  { path: ROUTE_PATHS.LOGIN, element: <Login /> },
  {
    path: '*',
    element: (
      <DefaultView>
        <NotFound />
      </DefaultView>
    ),
  },
];

export default routes;
