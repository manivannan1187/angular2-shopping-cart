import { Component, OnInit } from '@angular/core';

import {MdButton} from '@angular2-material/button';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'sc-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [
    MdButton,
    MdToolbar,
    MdIcon
  ],
  providers: [ MdIconRegistry ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
