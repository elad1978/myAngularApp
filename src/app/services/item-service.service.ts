import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root',
})
export class ItemServiceService {
  items: Array<Item> = [];
  dreamItems: Array<Item> = [
    // { category: 'sss', company: 'ffff', model: 'sss', price: 333 },
  ];

  constructor() {}

  //Cart items

  addItem(item: Item) {
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

  //Dream Items

  addDreamItem(item: Item) {
    this.dreamItems.push(item);
    return this.dreamItems;
  }

  getDreamItems() {
    return this.dreamItems;
  }

  emptyDreamItems() {
    this.dreamItems = [];
    return this.dreamItems;
  }

  removeDreamItem(item: Item) {
    let index = this.dreamItems.indexOf(item);
    this.dreamItems.splice(index, 1);
    return this.dreamItems;
  }
}
