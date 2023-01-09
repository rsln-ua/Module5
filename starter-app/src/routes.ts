import { FC } from 'react';
import { ResourcesContainer } from './containers/ResourcesContainer';
import Home from './pages/Home';
import { routes } from './constants/routes';
import { ViewResourceContainer } from './containers/ViewResourceContainer';
import { SuccessPage } from './pages/SuccessPage';
import { UsersContainer } from './containers/UsersContainer';
import { ViewUserContainer } from './containers/ViewUserContainer';
import { EditUserContainer } from './containers/EditUserContainer';
import { CreateUserContainer } from './containers/CreateUserContainer';

interface Route {
  key: string;
  path: string;
  title?: string;
  component: FC<{}>;
}

export const appRoutes: Array<Route> = [
  {
    title: 'Home',
    key: 'home-route',
    path: routes.home.path,
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
  {
    title: 'Users',
    key: 'users',
    path: routes.users.path,
    component: UsersContainer,
  },
  {
    key: 'view-user',
    path: routes.viewUser.path,
    component: ViewUserContainer,
  },
  {
    key: 'edit-user',
    path: routes.editUser.path,
    component: EditUserContainer,
  },
  {
    key: 'create-user',
    path: routes.createUser.path,
    component: CreateUserContainer,
  },
  {
    key: 'success',
    path: routes.success.path,
    component: SuccessPage,
  },
];
