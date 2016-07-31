import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { ShopComponent, environment, SHOP_ROUTES_PROVIDER } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ShopComponent, [SHOP_ROUTES_PROVIDER, HTTP_PROVIDERS]);
