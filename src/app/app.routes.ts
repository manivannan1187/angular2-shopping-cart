/**
 * Created by sergik on 02.08.16.
 */
import { provideRouter} from '@angular/router';

import {GoodsComponent} from "./goods/goods.component";
import {GoodsDetailComponent} from "./goods/goods-detail/goods-detail.component";
import { CartComponent } from "./cart/cart.component";


export const APP_ROUTES_PROVIDERS = [
  provideRouter([
    { path: '', component: GoodsComponent },
    { path: 'cart', component: CartComponent},
    { path: ':id', component: GoodsDetailComponent }
  ])
];
