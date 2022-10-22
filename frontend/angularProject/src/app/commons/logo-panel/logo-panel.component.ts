import { Component } from '@angular/core';

import { LOGO } from 'src/constants/constants.data';

@Component({
  selector: 'logo-panel',
  templateUrl: './logo-panel.component.html',
})
export class LogoPanelComponent {
  readonly logo = LOGO;
}
