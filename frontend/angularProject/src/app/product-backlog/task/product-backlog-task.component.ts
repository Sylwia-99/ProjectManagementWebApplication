import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MoveTaskToSprintModalComponent } from '../modals/move-task-to-sprint-modal/move-task-to-sprint-modal.component';
import { DOTS } from 'src/constants/constants.data';

@Component({
  selector: 'product-backlog-task',
  templateUrl: './product-backlog-task.component.html',
})
export class ProductBackolgTaskComponent {
  @Input() name: string | undefined;

  @Input() uuid: string | undefined;

  @Output() callbackRefreshProductBacklog: EventEmitter<any> =
    new EventEmitter();

  readonly dots = DOTS;

  constructor(public dialogRef: MatDialog) {}

  moveTaskToSprint(): void {
    const dialog = this.dialogRef.open(MoveTaskToSprintModalComponent, {
      data: {
        name: this.name,
        uuid: this.uuid,
      },
      width: '40vw',
      height: '23rem',
    });
  }

  refreshProductBacklog(): void {
    this.callbackRefreshProductBacklog.emit();
  }
}
