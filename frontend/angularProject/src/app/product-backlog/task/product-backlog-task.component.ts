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

  @Input() isSprintTask = false ;

  @Output() callbackRefreshProductBacklog: EventEmitter<any> =
  new EventEmitter();

  readonly dots = DOTS;

  constructor(
    public dialogRef: MatDialog, 
    private productBacklogService: ProductBacklogService
  ) { }

  moveTaskToSprint(taskUuid: string): void {
    const dialog = this.dialogRef.open(MoveTaskToSprintModalComponent, {
      data: {
        name: this.name,
        uuid: this.uuid,
      },
      width: '40vw',
      height: '23rem',
    });

    dialog.afterClosed().subscribe((result) => {
      if(result)
        this.productBacklogService.moveTaskToSprint(taskUuid, result).subscribe(() => {
          this.callbackRefreshProductBacklog.emit();
        })

      
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
              result.uuid = uuid          
              task = result 
              this.productBacklogService.editTask(result).subscribe(() => {
                this.callbackRefreshProductBacklog.emit();
            })
        });
      });
  }

  removeTask(uuid: string): void{
    this.productBacklogService.removeTask(uuid);
    this.callbackRefreshProductBacklog.emit();
  }
}
