import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductBacklogService } from 'src/data/product-backlog.service';
import { Sprint, TaskUpdateRequest } from 'src/interfaces/product-backlog';
import { SPRINTS } from 'src/core/_database/product-backlog';

@Component({
  selector: 'move-task-to-sprint-modal',
  templateUrl: './move-task-to-sprint-modal.component.html',
})
export class MoveTaskToSprintModalComponent {
  sprints: Sprint[] = SPRINTS;

  isInvalidFlag = false;

  name = new FormControl('');
  sprint = new FormControl('');

  sprintForm: FormGroup = this.builder.group({
    name: [{ value: this.data.name, disabled: true }],
    sprint: this.sprint,
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MoveTaskToSprintModalComponent>,
    private builder: FormBuilder,
    private productBacklogService: ProductBacklogService
  ) {}

  save() {
    if (this.sprintForm.valid) {
      let moveTaskToSprint: TaskUpdateRequest = this.sprintForm.value;
      this.productBacklogService
        .moveTaskToSprint(moveTaskToSprint, ['personUUID', this.data.uuid])
        .subscribe((result) => {          
          this.dialogRef.close(result);
        });
    } else {
      this.isInvalidFlag = true;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
