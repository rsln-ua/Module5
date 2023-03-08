import { makeAutoObservable } from 'mobx';
import { getResourceById } from '../api/resources';
import { TResourcesDto } from '../types/resources';

export class CurrentResource {
  item?: TResourcesDto | null;

  constructor() {
    makeAutoObservable(this);
  }

  async getItem(id?: number) {
    if (!id) throw new Error();
    if (id === this.item?.id) return;

    const { data } = await getResourceById(id);

    this.item = data;
  }

  clear() {
    this.item = null;
  }
}
