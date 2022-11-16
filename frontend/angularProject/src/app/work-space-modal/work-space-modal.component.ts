import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { WORK_SPACE } from 'src/core/_database/work-space';

import { WorkspaceService } from 'src/data/work-space.service';
import { WorkSpaceCreateRequest } from 'src/interfaces/workspace';

@Component({
  selector: 'work-space-modal',
  templateUrl: './work-space-modal.component.html',
})
export class WorkSpaceModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,    
    public dialogRef: MatDialogRef<WorkSpaceModalComponent>, 
    private builder: FormBuilder,
    private workspaceService: WorkspaceService
  ) { }

  workspacelist = WORK_SPACE;

  isInvalidFlag = false;

  name = new FormControl('');
  description = new FormControl('');
  
  workSpaceForm: FormGroup = this.builder.group({
    name: this.name,
    description: this.description
  });

  save() {
    if(this.workSpaceForm.valid){
      console.log(this.workSpaceForm.value);
      let workSpaceCreateRequest: WorkSpaceCreateRequest = this.workSpaceForm.value
      this.workspaceService.createUserWorkSpace(workSpaceCreateRequest,["user-id"])
        .subscribe(workspace =>  
          {
            console.log((workspace)); 
            this.dialogRef.close(workspace);
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
