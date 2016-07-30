/**
 * Created by sergik on 30.07.16.
 */
import {provideRouter, RouterConfig} from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { ShopListComponent } from "./shop-list/shop-list.component";

const SHOP_ROUTES: RouterConfig = [
  { path: 'cart',
    component: CartComponent
  },
  { path: '',
    component: ShopListComponent,
    pathMatch: 'full'
  },
];

export const SHOP_ROUTES_PROVIDER = [
  provideRouter(SHOP_ROUTES)
];
