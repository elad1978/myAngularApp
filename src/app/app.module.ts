import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ContentComponent } from './layout/content/content.component';
import { HomeComponent } from './screens/home/home.component';
import { CatalogComponent } from './screens/catalog/catalog.component';
import { ItemDetailsComponent } from './screens/item-details/item-details.component';
import { ItemComponent } from './screens/item/item.component';
import { CartComponent } from './screens/cart/cart.component';
import { DreamListComponent } from './screens/dream-list/dream-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './screens/todos/todos.component';
import { UsersComponent } from './screens/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContentComponent,
    HomeComponent,
    CatalogComponent,
    ItemDetailsComponent,
    ItemComponent,
    CartComponent,
    DreamListComponent,
    TodosComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
