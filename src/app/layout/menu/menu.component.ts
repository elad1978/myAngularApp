import { Component } from '@angular/core';
import { items } from 'src/app/data/menu-item';
import { Menultem } from 'src/app/model/menultem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menuModel: Array<Menultem> = items;
}
