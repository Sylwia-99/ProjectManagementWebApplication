import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'work-space-modal',
  templateUrl: './work-space-modal.component.html',
})
export class WorkSpaceModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,    
    public dialogRef: MatDialogRef<WorkSpaceModalComponent>, 
    private builder: FormBuilder,
  ) { }


  isInvalidFlag = false;

  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  
  workSpaceForm: FormGroup = this.builder.group({
    name: this.name,
    description: this.description
  });

  save() {
    if(this.workSpaceForm.valid){
      console.log(this.workSpaceForm.value);
    }
    else{
      this.isInvalidFlag = true;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
