import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './screens/catalog/catalog.component';
import { HomeComponent } from './screens/home/home.component';
import { CartComponent } from './screens/cart/cart.component';
import { DreamListComponent } from './screens/dream-list/dream-list.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'dreamList', component: DreamListComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
