import { TAppStore } from '../types/app';
import { createContext } from 'react';
import { AuthStore } from './AuthStore';
import { ResourcesStore } from './ResourcesStore';
import { CurrentResource } from './CurrentResource';
import { UsersStore } from './UsersStore';
import { CurrentUser } from './CurrentUser';

export const appStore: TAppStore = {
  auth: new AuthStore(),
  resources: new ResourcesStore(),
  currentResource: new CurrentResource(),
  users: new UsersStore(),
  currentUser: new CurrentUser(),
};
export const AppStoreContext = createContext(appStore);
