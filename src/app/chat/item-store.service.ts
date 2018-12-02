import { Injectable } from '@angular/core';
import { Item } from './models/item.model';
import { DEMO_ITEMS } from '../../mock-data';

@Injectable()
export class ItemStoreService {
  items: Item[] = [];

  constructor() {
    this.items.push(...DEMO_ITEMS);
  }

  addItem(item: Item) {
    this.items.push(item);
  }
}

