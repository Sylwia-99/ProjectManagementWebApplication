import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PROFILE } from 'src/constants/constants.data';
import { LOGO } from 'src/constants/constants.data';

enum ButtonState {
  MainPage,
  ProductBacklog,
}

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  readonly profile = PROFILE;

  readonly logo = LOGO;

  currentPage = ButtonState.MainPage;

  constructor(public router: Router) {}
}
