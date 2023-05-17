import { Component } from '@angular/core';
import { pageFooter } from 'src/app/data/layout-data';
import { Footer } from 'src/app/model/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  footerModel: Footer = pageFooter;
}
