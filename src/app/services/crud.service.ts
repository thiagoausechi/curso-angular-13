import { Injectable } from '@angular/core';

type ID = string;

@Injectable({
  providedIn: 'root',
})
export class CrudService<T> {
  private storage = new Map<ID, T>();

  constructor() {}

  setStorage(storage: Map<ID, T>) {
    this.storage = storage;
  }

  getStorage(): Map<ID, T> {
    return new Map(this.storage);
  }

  create(data: (id: string) => T) {
    const id = crypto.randomUUID();
    this.storage.set(id, data(id));
  }

  read(id: ID): T | undefined {
    return this.storage.get(id);
  }

  update(id: ID, newData: T) {
    this.storage.set(id, newData);
  }

  delete(id: ID) {
    this.storage.delete(id);
  }
}
