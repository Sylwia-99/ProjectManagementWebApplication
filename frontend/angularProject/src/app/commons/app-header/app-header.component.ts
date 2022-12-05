import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LOGO, PROFILE } from 'src/constants/constants.data';

enum ButtonState {
  MainPage,
  ProductBacklog,
}

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent implements OnInit{
  @Input() sprintName: string | undefined;

  readonly profile = PROFILE;

  readonly logo = LOGO;

  currentPage = ButtonState.MainPage;

  isSprintView = false;

  constructor(public router: Router) {}

  ngOnInit(): void {
    if (this.router.url.includes('/sprint')){
      this.isSprintView = true
    }
  }
}
