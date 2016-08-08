/**
 * Created by sergik on 02.08.16.
 */
import { provideRouter} from '@angular/router';

import {GoodsComponent} from "./goods/goods.component";
import {GoodsDetailComponent} from "./goods/goods-detail/goods-detail.component";
import { CartListComponent } from "./cart/cart-list.component";


export const APP_ROUTES_PROVIDERS = [
  provideRouter([
    { path: '', component: GoodsComponent },
    { path: 'cart', component: CartListComponent},
    { path: ':id', component: GoodsDetailComponent }
  ])
];
