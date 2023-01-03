import { Route } from '../helpers/Route';

export const routes = {
  home: Route.of('/'),
  resources: Route.of('/resources'),
  viewResource: Route.of<{ id: number }>('/view-resource/:id'),
};
