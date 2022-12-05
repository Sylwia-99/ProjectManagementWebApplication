import { Component, Input } from '@angular/core';
import { DOTS, PROFILE } from 'src/constants/constants.data';

import { Task } from 'src/interfaces/product-backlog';

@Component({
  selector: 'status-column-task',
  templateUrl: './task.component.html',
})
export class TaskComponent{
  @Input() task: Task;

  readonly dots = DOTS;

  readonly profile = PROFILE;
}
