import { FC } from 'react';
import { ResourcesContainer } from './containers/ResourcesContainer';
import Home from './pages/Home';
import { routes } from './constants/routes';
import { ViewResourceContainer } from './containers/ViewResourceContainer';

interface Route {
  key: string;
  path: string;
  title?: string;
  component: FC<{}>;
}

export const appRoutes: Array<Route> = [
  {
    key: 'home-route',
    path: routes.home.path,
    title: 'Home',
    component: Home,
  },
  {
    key: 'resources',
    path: routes.resources.path,
    title: 'Resources',
    component: ResourcesContainer,
  },
  {
    key: 'view-resource',
    path: routes.viewResource.path,
    component: ViewResourceContainer,
  },
];
