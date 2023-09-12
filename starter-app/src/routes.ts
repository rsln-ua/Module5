import { FC } from 'react';
import { ResourcesContainer } from './containers/ResourcesContainer';
import Home from './pages/Home';
import { routes } from './constants/routes';
import { ViewResourceContainer } from './containers/ViewResourceContainer';
import { UsersContainer } from './containers/UsersContainer';
import { ViewUserContainer } from './containers/ViewUserContainer';
import { EditUserContainer } from './containers/EditUserContainer';
import { CreateUserContainer } from './containers/CreateUserContainer';

interface Route {
  key: string;
  path: string;
  link: string;
  title?: string;
  component: FC<{}>;
}

export const appRoutes: Array<Route> = [
  {
    title: 'Home',
    key: 'home-route',
    path: routes.home.path,
    link: routes.home.get(),
    component: Home,
  },
  {
    key: 'resources',
    path: routes.resources.path,
    link: routes.resources.get(),
    title: 'Resources',
    component: ResourcesContainer,
  },
  {
    key: 'view-resource',
    path: routes.viewResource.path,
    link: routes.viewResource.get(),
    component: ViewResourceContainer,
  },
  {
    title: 'Users',
    key: 'users',
    path: routes.users.path,
    link: routes.users.get(),
    component: UsersContainer,
  },
  {
    key: 'view-user',
    path: routes.viewUser.path,
    link: routes.viewUser.get(),
    component: ViewUserContainer,
  },
  {
    key: 'edit-user',
    path: routes.editUser.path,
    link: routes.editUser.get(),
    component: EditUserContainer,
  },
  {
    key: 'create-user',
    path: routes.createUser.path,
    link: routes.createUser.get(),
    component: CreateUserContainer,
  },
];
