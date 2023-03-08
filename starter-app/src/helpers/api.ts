import { BASE_API_URL, HTTP_METHOD } from '../constants/api';

export const jsonQuery = <T>(
  path: string,
  method: HTTP_METHOD,
  body?: object
) => {
  return fetch(getFullUrl(path), {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  }).then((res) => res.json()) as Promise<T>;
};

export const getFullUrl = (path: string) => {
  return new URL(path, BASE_API_URL).toString();
};
