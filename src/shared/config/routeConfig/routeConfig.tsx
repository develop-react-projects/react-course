import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const AppRoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: AppRoutePaths.main,
    element: <MainPage />,
  },

  [AppRoutes.ABOUT]: {
    path: AppRoutePaths.about,
    element: <AboutPage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: AppRoutePaths.not_found,
    element: <NotFoundPage />,
  },
};
