import { jsonQuery } from '../helpers/api';
import { HTTP_METHOD, SEARCH_PARAMS_KEYS } from '../constants/api';
import { TData, TPaginatedList } from '../types/api';
import { TResourcesDto } from '../types/resources';

export const getListResources = (pageNumber: number) => {
  const searchParams = new URLSearchParams();
  searchParams.set(SEARCH_PARAMS_KEYS.page, pageNumber.toString());

  const data = jsonQuery<TPaginatedList<TResourcesDto>>(
    'api/unknown?' + searchParams,
    HTTP_METHOD.GET
  );

  return data;
};

export const getResourceById = (id: number) => {
  const data = jsonQuery<TData<TResourcesDto>>(
    'api/unknown/' + id,
    HTTP_METHOD.GET
  );

  return data;
};
