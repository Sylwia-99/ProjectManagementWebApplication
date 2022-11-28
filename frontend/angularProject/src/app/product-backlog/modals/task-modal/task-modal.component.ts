import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { STATUSES } from 'src/core/_database/product-backlog';

import { WORK_SPACE } from 'src/core/_database/work-space';
import { ProductBacklogService } from 'src/data/product-backlog.service';
import { StatusType, TaskCreateRequest } from 'src/interfaces/product-backlog';

@Component({
  selector: 'task-modal',
  templateUrl: './task-modal.component.html',
})
export class TaskModalComponent implements OnInit {

  statuses = STATUSES;

  selectedStatusValue: string;

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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  save() {
    if(this.taskForm.valid){
      console.log(this.taskForm.value);
      let taskCreateRequest: TaskCreateRequest = this.taskForm.value
      this.productBacklogService.createTask(taskCreateRequest,["workspace-id"])
        .subscribe((task)=>  
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
