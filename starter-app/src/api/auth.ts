import { jsonQuery } from '../helpers/api';
import { HTTP_METHOD } from '../constants/api';

interface ILoginRequest {
  (params: { email: string; password: string }): Promise<{
    token?: string;
  }>;
}

export const loginRequest: ILoginRequest = ({ email, password }) => {
  return jsonQuery<{ token?: string; error?: string }>(
    'api/login/',
    HTTP_METHOD.POST,
    {
      email,
      password,
    }
  ).then((el) => {
    if (el.error) throw new Error(el.error);
    return el;
  });
};

interface IRegisterRequest {
  (params: { email: string; password: string }): Promise<{
    token?: string;
  }>;
}

export const registerRequest: IRegisterRequest = ({ email, password }) => {
  return jsonQuery<{ token?: string; error?: string }>(
    'api/register/',
    HTTP_METHOD.POST,
    {
      email,
      password,
    }
  ).then((el) => {
    if (el.error) throw new Error(el.error);
    return el;
  });
};
