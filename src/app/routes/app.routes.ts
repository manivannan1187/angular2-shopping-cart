/**
 * Created by sergik on 30.07.16.
 */
import {provideRouter, RouterConfig} from "@angular/router";
import { CartComponent } from "../cart/cart.component";
import { HomeComponent } from "../home/home.component";

const APP_ROUTES: RouterConfig = [
  { path: 'cart',
    component: CartComponent
  },
  { path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
];

export const APP_ROUTES_PROVIDER = [
  provideRouter(APP_ROUTES)
];
