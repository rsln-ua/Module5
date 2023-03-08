import { makeAutoObservable } from 'mobx';
import { getListResources } from '../api/resources';
import { TResourcesDto } from '../types/resources';

export class ResourcesStore {
  list: Array<TResourcesDto> = [];
  currentPage: number = 1;
  totalPages: number = 1;
  totalItems?: number;
  perPage?: number;

  constructor() {
    makeAutoObservable(this);
  }

  async getList(pageNumber?: number) {
    const { data, page, total_pages, total, per_page } = await getListResources(
      pageNumber || this.currentPage
    );

    this.list = data;
    this.currentPage = page;
    this.totalPages = total_pages;
    this.totalItems = total;
    this.perPage = per_page;
  }
}
