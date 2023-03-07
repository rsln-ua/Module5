import { makeAutoObservable } from 'mobx';
import { loginRequest } from '../api/auth';

export class AuthStore {
  isLoading = false;
  token: string | null = null;

  get isAuthorized() {
    return Boolean(this.token);
  }

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    this.isLoading = true;
    try {
      const result = await loginRequest({ email, password });
      if (!!result.token) this.token = result.token;
    } finally {
      this.isLoading = false;
    }
  }
}
