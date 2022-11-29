import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { StatusType, Task } from 'src/interfaces/product-backlog';

@Component({
  selector: 'task-view',
  templateUrl: './view.component.html',
})
export class ViewComponent {
  task: Task;

  StatusType: StatusType

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Task,    
    public dialogRef: MatDialogRef<ViewComponent>, 
  ) { 
    if(this.data)
      this.task = this.data
    console.log(this.task)
  }

  close() {
    this.dialogRef.close();
  }

  translateLabel(value: string, dictionary: any): string{
    return dictionary[value]
  }
}
