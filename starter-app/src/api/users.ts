import { HTTP_METHOD, SEARCH_PARAMS_KEYS } from '../constants/api';
import { jsonQuery } from '../helpers/api';
import { TData, TPaginatedList } from '../types/api';
import { TUserDto } from '../types/user';

export const getListUsers = (pageNumber: number) => {
  const searchParams = new URLSearchParams();
  searchParams.set(SEARCH_PARAMS_KEYS.page, pageNumber.toString());

  const data = jsonQuery<TPaginatedList<TUserDto>>(
    'api/users?' + searchParams,
    HTTP_METHOD.GET
  );

  return data;
};

export const getUserById = (id: number) => {
  const data = jsonQuery<TData<TUserDto>>('api/users/' + id, HTTP_METHOD.GET);

  return data;
};

export const updateUserById = (id: number, userData: Partial<TUserDto>) => {
  return jsonQuery('api/users/' + id, HTTP_METHOD.PUT, userData);
};

export const createUser = (userData: Partial<TUserDto>) => {
  return jsonQuery('api/users', HTTP_METHOD.POST, userData);
};
