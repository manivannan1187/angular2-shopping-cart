/**
 * Created by sergik on 02.08.16.
 */
import { provideRouter} from '@angular/router';

import { ProductsComponent } from "./products/products.component";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import { CartListComponent } from "./cart/cart-list.component";


export const APP_ROUTES_PROVIDERS = [
  provideRouter([
    { path: '', component: ProductsComponent },
    { path: 'cart', component: CartListComponent},
    { path: ':id', component: ProductDetailComponent }
  ])
];
