import { makeAutoObservable } from 'mobx';
import { TUserDto } from '../types/user';
import { getListUsers } from '../api/users';

export class UsersStore {
  list: Array<TUserDto> = [];
  currentPage: number = 1;
  totalPages: number = 1;
  totalItems?: number;
  perPage?: number;

  constructor() {
    makeAutoObservable(this);
  }

  async getList() {
    const { data, page, total_pages, total, per_page } = await getListUsers(
      this.currentPage
    );

    this.list = data;
    this.currentPage = page;
    this.totalPages = total_pages;
    this.totalItems = total;
    this.perPage = per_page;
  }
}
