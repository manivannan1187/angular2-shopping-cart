/**
 * Created by sergik on 30.07.16.
 */
/**
 * Created by sergik on 28.07.16.
 */

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <h1>Shopping</h1>
    <hr>
     <a [routerLink]="['/']">Home</a>
     <a [routerLink]="['/cart']">Cart</a>
    <hr>
    <router-outlet></router-outlet>
`,
  directives: [ROUTER_DIRECTIVES]
})

export class ShopComponent { }
