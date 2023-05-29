import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './screens/catalog/catalog.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: CatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
