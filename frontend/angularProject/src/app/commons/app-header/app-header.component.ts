import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import {LOGO, PROFILE } from 'src/constants/constants.data';

enum ButtonState {
  MainPage,
  ProductBacklog,
}

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  @Output() logout = new EventEmitter();

  readonly profile = PROFILE;

  readonly logo = LOGO;
  
  currentPage = ButtonState.MainPage;

  constructor(public router: Router) {}
}
