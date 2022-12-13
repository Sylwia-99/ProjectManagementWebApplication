import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { USERS } from 'src/core/_database/product-backlog';

import { WorkspaceService } from 'src/data/work-space.service';
import { User } from 'src/interfaces/product-backlog';
import { WorkSpace } from 'src/interfaces/workspace';

@Component({
  selector: 'add-member-modal',
  templateUrl: './add-member-modal.component.html',
})
export class AddMemberModalComponent {
  isInvalidFlag = false;

  member = new FormControl('');

  memberForm: FormGroup = this.builder.group({
    member: this.member,
  });

  users: User[] = USERS;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddMemberModalComponent>,
    private builder: FormBuilder,
    private workspaceService: WorkspaceService
  ) {}

  save() {
    if (this.memberForm.valid) {
      let memberUpdateRequest = this.memberForm.value;

      this.workspaceService
        .addMember(memberUpdateRequest, 'workspace-uuid')
        .subscribe((workspace: WorkSpace) => {
          this.dialogRef.close(workspace);
        });
    } else {
      this.isInvalidFlag = true;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
