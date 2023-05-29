import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root',
})
export class ItemServiceService {
  items: Array<Item> = [];
  constructor() {}
}
