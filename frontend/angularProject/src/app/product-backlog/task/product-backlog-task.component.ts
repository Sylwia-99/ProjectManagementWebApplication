import { Component, Input, OnInit } from '@angular/core';

import { DOTS } from 'src/constants/constants.data';

@Component({
  selector: 'product-backlog-task',
  templateUrl: './product-backlog-task.component.html',
})
export class ProductBackolgTaskComponent {
  @Input() name: string | undefined;

  @Input() uuid: string | undefined;

  readonly dots = DOTS;
}
