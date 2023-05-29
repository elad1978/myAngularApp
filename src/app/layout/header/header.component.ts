import { Component, Input } from '@angular/core';
import { pageHeader } from 'src/app/data/layout-data';
import { Header } from 'src/app/model/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // headerModel: Header = pageHeader; //the data comes directly
  @Input() headerModel: Header = pageHeader; //the data comes from the parent element
}
