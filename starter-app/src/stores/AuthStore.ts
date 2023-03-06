import { makeAutoObservable } from 'mobx';
import { loginRequest } from '../api/auth';

export class AuthStore {
  token?: string;

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    const result = await loginRequest({ email, password });
    if (!!result.token) this.token = result.token;
  }
}
