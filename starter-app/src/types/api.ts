export interface TPaginatedList<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<T>;
}

export interface TData<T> {
  data: T;
}
