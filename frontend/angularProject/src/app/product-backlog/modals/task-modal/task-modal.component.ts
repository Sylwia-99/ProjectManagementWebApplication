import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { STATUSES, USERS } from 'src/core/_database/product-backlog';
import { ProductBacklogService } from 'src/data/product-backlog.service';
import { ComboData, StatusType, TaskCreateRequest, User, Task} from 'src/interfaces/product-backlog';

@Component({
  selector: 'task-modal',
  templateUrl: './task-modal.component.html',
})
export class TaskModalComponent implements OnInit{

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
    @Inject(MAT_DIALOG_DATA) public data: Task,    
    public dialogRef: MatDialogRef<TaskModalComponent>, 
    private builder: FormBuilder,
    private productBacklogService: ProductBacklogService
  ) { }

  ngOnInit(): void {
      if(this.data){
        console.log(this.data)
        this.taskForm.patchValue({
          name: this.data.name,
          description: this.data.description,
          acceptanceCriteria: this.data.acceptanceCriteria,
          userUuid: this.data.userUuid,
          status: this.data.status,
          storyPoints: this.data.storyPoints
        });
      }
  }

  save() {
    if(this.taskForm.valid){
      let taskCreateRequest: TaskCreateRequest = this.taskForm.value
      this.productBacklogService.createTask(taskCreateRequest,["workspace-id"])
        .subscribe((task: Task)=>  
          {
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
