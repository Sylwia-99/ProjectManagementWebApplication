import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { STATUSES, USERS } from 'src/core/_database/product-backlog';
import { ProductBacklogService } from 'src/data/product-backlog.service';
import { ComboData, StatusType, TaskCreateRequest, User, Task} from 'src/interfaces/product-backlog';

@Component({
  selector: 'task-modal',
  templateUrl: './task-modal.component.html',
})
export class TaskModalComponent {

  statuses: ComboData[] = STATUSES;

  users: User[] = USERS;

  isInvalidFlag = false;

  name = new FormControl('');
  description = new FormControl('');
  acceptanceCriteria = new FormControl('');
  userUuid =   new FormControl('');
  status =  new FormControl(StatusType.TO_DO);
  storyPoints = new FormControl('');


  taskForm: FormGroup = this.builder.group({
    name: this.name,
    description: this.description,
    acceptanceCriteria: this.acceptanceCriteria,
    userUuid: this.userUuid,
    status: this.status,
    storyPoints: this.storyPoints
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,    
    public dialogRef: MatDialogRef<TaskModalComponent>, 
    private builder: FormBuilder,
    private productBacklogService: ProductBacklogService
  ) { }

  save() {
    if(this.taskForm.valid){
      console.log(this.taskForm.value);
      let taskCreateRequest: TaskCreateRequest = this.taskForm.value
      this.productBacklogService.createTask(taskCreateRequest,["workspace-id"])
        .subscribe((task: Task)=>  
          {
            console.log((task)); 
            this.dialogRef.close(task);
          }
      );
    }
    else{
      this.isInvalidFlag = true;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
