import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { CatalogComponent, environment } from './app/';
import {APP_ROUTES_PROVIDERS} from "./app/app.routes";

if (environment.production) {
  enableProdMode();
}

bootstrap(CatalogComponent, [
  APP_ROUTES_PROVIDERS,
  HTTP_PROVIDERS
]);
