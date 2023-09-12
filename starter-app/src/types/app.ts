import {
  AuthStore,
  CurrentResource,
  CurrentUser,
  ResourcesStore,
  UsersStore,
} from '../stores';

export interface TAppStore {
  auth: AuthStore;
  resources: ResourcesStore;
  currentResource: CurrentResource;
  users: UsersStore;
  currentUser: CurrentUser;
}
