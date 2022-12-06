import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  readonly dots = DOTS;

  constructor(
    public dialogRef: MatDialog, 
    private productBacklogService: ProductBacklogService
  ) { }

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
