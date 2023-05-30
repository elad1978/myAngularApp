import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/model/catalog';
import { PageCatalog } from 'src/app/data/catalog-data';
import { ActivatedRoute } from '@angular/router';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { Item } from 'src/app/model/item';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  catalogModel: Catalog = PageCatalog;

  constructor(
    //private route: ActivatedRoute,
    private ItemService: ItemServiceService
  ) {}

  addItem(item: Item) {
    this.ItemService.addItem(item);
    window.alert('Your product has been added to the cart!');
  }
}
