import { makeAutoObservable } from 'mobx';
import { TUserDto } from '../types/user';
import { getUserById, updateUserById } from '../api/users';

export class CurrentUser {
  item?: TUserDto | null;

  constructor() {
    makeAutoObservable(this);
  }

  async getItem(id?: number) {
    if (!id) throw new Error();
    if (id === this.item?.id) return;

    const { data } = await getUserById(id);

    this.item = data;
  }

  clear() {
    this.item = null;
  }

  async updateUser(item: Partial<TUserDto>): Promise<void> {
    const newData = { ...(this.item || {}), ...item } as TUserDto;
    const res = await updateUserById(this.item?.id!, newData);
    if (!res?.id) throw new Error();
    this.item = newData;
  }
}
