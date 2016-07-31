/**
 * Created by sergik on 30.07.16.
 */
/**
 * Created by sergik on 28.07.16.
 */

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

import {MdButton} from '@angular2-material/button';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'shop.component.html',
  styleUrls: ['shop.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdButton,
    MdToolbar,
    MdIcon
  ],
  providers: [ MdIconRegistry ]
})

export class ShopComponent { }
