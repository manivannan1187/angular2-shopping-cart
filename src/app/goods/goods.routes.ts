/**
 * Created by sergik on 02.08.16.
 */
import {RouterConfig} from "@angular/router";

import {GoodsStartComponent} from "./goods-start.component";
import {GoodsDetailComponent} from "./goods-detail/goods-detail.component";

export const GOODS_ROUTES: RouterConfig = [
  { path: '', component: GoodsStartComponent },
  // { path: ':id', component: GoodsDetailComponent }
];
