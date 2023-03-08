import { makeAutoObservable } from 'mobx';
import { loginRequest, registerRequest } from '../api/auth';
import { AbstractErrorMsg } from '../constants/errors';

export class AuthStore {
  isLoading = false;
  token: string | null = null;
  error?: string | null;

  get isAuthorized() {
    return Boolean(this.token);
  }

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    try {
      this.isLoading = true;

      const result = await loginRequest({ email, password });
      if (!!result?.token) this.token = result?.token;
    } catch (e) {
      this.error = (e as Error).message;
      throw new Error(this.error);
    } finally {
      this.isLoading = false;
    }
  }

  async register(email: string, password: string) {
    try {
      this.isLoading = true;

      const result = await registerRequest({ email, password });
      if (!result?.token) throw new Error(AbstractErrorMsg);
      this.token = result?.token;
    } catch (e) {
      this.error = (e as Error).message;
      throw new Error(this.error);
    } finally {
      this.isLoading = false;
    }
  }
}
