import { Component, EventEmitter, Output } from '@angular/core';

import {LOGO, PROFILE } from 'src/constants/constants.data';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent { 
  readonly profile = PROFILE;

  readonly logo = LOGO;

  @Output() logout = new EventEmitter();
}