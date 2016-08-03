/**
 * Created by sergik on 02.08.16.
 */
import { provideRouter} from '@angular/router';

import {GoodsComponent} from "./goods/goods.component";
import {GOODS_ROUTES} from "./goods/goods.routes";
import {GoodsDetailComponent} from "./goods/goods-detail/goods-detail.component";


export const APP_ROUTES_PROVIDERS = [
  provideRouter([
    { path: '', component: GoodsComponent, children: GOODS_ROUTES },
    { path: ':id', component: GoodsDetailComponent }
  ])
];
