import { Component } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemServiceService } from 'src/app/services/item-service.service';

@Component({
  selector: 'app-dream-list',
  templateUrl: './dream-list.component.html',
  styleUrls: ['./dream-list.component.css'],
})
export class DreamListComponent {
  dreamList: Array<Item> = [];
  dreamItem: Item = {};

  constructor(
    //private route: ActivatedRoute,
    private ItemService: ItemServiceService
  ) {}

  getDreamItems() {
    this.dreamList = this.ItemService.getDreamItems();
    // window.alert('Your cart has been emptied!');
  }

  addDreamItem() {
    let dreamItemLocal: Item = Object.assign({}, this.dreamItem);
    this.dreamList = this.ItemService.addDreamItem(dreamItemLocal);
    this.dreamItem = {};
  }

  emptyDreamItems() {
    this.dreamList = this.ItemService.emptyDreamItems();
  }

  removeDreamItem(item: Item) {
    this.ItemService.removeDreamItem(item);
  }
}
