import { Component, Input } from '@angular/core';

import { PROFILE } from 'src/constants/constants.data';
import { LOGO } from 'src/constants/constants.data';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent { 
  readonly profile = PROFILE;

  readonly logo = LOGO;
}