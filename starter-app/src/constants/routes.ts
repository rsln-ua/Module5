import { Route } from '../helpers/Route';

export const routes = {
  home: Route.of('/'),
  success: Route.of('/success'),
  resources: Route.of('/resources'),
  viewResource: Route.of<{ id: number }>('/view-resource/:id'),
  users: Route.of('/users'),
  viewUser: Route.of<{ id: number }>('/view-user/:id'),
  editUser: Route.of<{ id: number }>('/edit-user/:id'),
  createUser: Route.of<{ id: number }>('/create-user'),
};
