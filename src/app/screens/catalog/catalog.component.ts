import { Component } from '@angular/core';
import { Catalog } from 'src/app/model/catalog';
import { PageCatalog } from 'src/app/data/catalog-data';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  catalogModel: Catalog = PageCatalog;
}
