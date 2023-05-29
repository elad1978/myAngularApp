import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/model/item';
import { ItemServiceService } from 'src/app/services/item-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.ItemService.getItems();
  constructor(
    //private route: ActivatedRoute,
    private ItemService: ItemServiceService
  ) {}

  emptyCart() {
    this.ItemService.emptyCart();
    window.alert('Your cart has been emptied!');
  }

  removeItem(item: Item) {
    this.ItemService.removeItem(item);
    window.alert(item + 'has been removed from cart!');
  }
}
