import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Sprint } from 'src/interfaces/product-backlog';
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
  ) {}

  save() {
    if (this.sprintForm.valid) {            
      this.dialogRef.close(this.sprint.value);
    } else {
      this.isInvalidFlag = true;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
