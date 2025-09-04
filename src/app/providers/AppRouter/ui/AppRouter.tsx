import { FC, Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter: FC = () => (
  <Routes>
    {Object.values(routeConfig).map((route: RouteProps) => (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
                }
      />
    ))}
  </Routes>
);
