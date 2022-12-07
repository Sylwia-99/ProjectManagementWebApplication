import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MoveTaskToSprintModalComponent } from '../modals/move-task-to-sprint-modal/move-task-to-sprint-modal.component';
import { DOTS } from 'src/constants/constants.data';
import { ProductBacklogService } from 'src/data/product-backlog.service';
import { Task } from 'src/interfaces/product-backlog';

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

  editTask(uuid: string){
    console.log('TO DO')
    // this.productBacklogService.getTask(uuid).subscribe((task: Task) =>  
    //     {
    //       this.dialogRef.open(ViewComponent, {
    //         width: '60vw',
    //         height: '50vh',
    //         data: task
    //       });
    //     }
    // );
  }
}
