import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductBacklogService } from 'src/data/product-backlog.service';
import { Sprint, SprintCreateRequest } from 'src/interfaces/product-backlog';

@Component({
  selector: 'add-sprint-modal',
  templateUrl: './add-sprint-modal.component.html',
})
export class AddSprintModalComponent {
  isInvalidFlag = false;

  name = new FormControl('');

  description = new FormControl('');

  startDate = new FormControl('');

  endDate = new FormControl('');

  sprintForm: FormGroup = this.builder.group({
    name: this.name,
    description: this.description,
    startDate: this.startDate,
    endDate: this.endDate,
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddSprintModalComponent>,
    private builder: FormBuilder,
    private productBacklogService: ProductBacklogService
  ) {}

  save() {
    if (this.sprintForm.valid) {
      let sprintCreateRequest: SprintCreateRequest = this.sprintForm.value;

      this.productBacklogService
        .createSprint(sprintCreateRequest, ['user-id', 'workspace-uuid'])
        .subscribe((sprint: Sprint) => {
          this.dialogRef.close(sprint);
        });
    } else {
      this.isInvalidFlag = true;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
