import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModalComponent } from 'src/app/product-backlog/modals/task-modal/task-modal.component';

import { ViewComponent } from 'src/app/product-backlog/modals/task-modal/view/view.component';
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

  constructor(
    public dialogRef: MatDialog, 
  ) {}

  viewTask(){
    {
      this.dialogRef.open(ViewComponent, {
        width: '60vw',
        height: '30rem',
        data: this.task
      });
    }
  }

  editTask(){
    const dialog =  this.dialogRef.open(TaskModalComponent, {            
      width: '60vw',
      height: '52rem',
      data: this.task
    });

    dialog.afterClosed().subscribe((result: Task) => {
      if(result)
        this.task.status = result.status 
    });
  }
}
