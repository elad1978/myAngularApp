import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root',
})
export class ItemServiceService {
  items: Array<Item> = [];
  constructor() {}

  addToCart(item: Item) {
    this.items.push(item);
    return this.items;
  }

  getItems() {
    return this.items;
  }

  emptyCart() {
    this.items = [];
    return this.items;
  }

  removeItem(item: Item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    return this.items;
  }
}
