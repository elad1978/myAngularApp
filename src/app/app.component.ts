import { Component } from '@angular/core';
import { Header } from './model/header';
import { pageHeader } from './data/layout-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myAngularApp';
  headerInput: Header = pageHeader; //this data goes to the child element: header
}
