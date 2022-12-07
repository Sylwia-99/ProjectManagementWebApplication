import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MoveTaskToSprintModalComponent } from '../modals/move-task-to-sprint-modal/move-task-to-sprint-modal.component';
import { DOTS } from 'src/constants/constants.data';
import { ProductBacklogService } from 'src/data/product-backlog.service';
import { Task } from 'src/interfaces/product-backlog';
import { TaskModalComponent } from '../modals/task-modal/task-modal.component';

@Component({
  selector: 'product-backlog-task',
  templateUrl: './product-backlog-task.component.html',
})
export class ProductBackolgTaskComponent {
  @Input() name: string ;

  @Input() uuid: string ;

  @Output() callbackRefreshProductBacklog: EventEmitter<any> =
    new EventEmitter();

  readonly dots = DOTS;

  constructor(
    public dialogRef: MatDialog, 
    private productBacklogService: ProductBacklogService
  ) { }

  moveTaskToSprint(): void {
    this.dialogRef.open(MoveTaskToSprintModalComponent, {
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

  editTask(uuid: string){
    this.productBacklogService.getTask(uuid).subscribe((task: Task) =>  
      {
        const dialog =  this.dialogRef.open(TaskModalComponent, {            
          width: '60vw',
          height: '52rem',
          data: task
        });

        dialog.afterClosed().subscribe((result: Task) => {
          if(result)
            task.status = result.status 
            this.productBacklogService.editTask(result, uuid).subscribe((result: Task) => {
              console.log(result)
            })
        });
      });
      
   
  }
}
