/**
 * Created by sergik on 16.08.16.
 */
import { Routes, RouterModule } from '@angular/router';

import {ProductsComponent} from "./products/product.component";
import {CartComponent} from "./cart/cart.component";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: 'catalog', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'catalog/:id', component: ProductDetailComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
