import { Component, OnInit } from '@angular/core';

import { Workspace } from 'src/interfaces/workspace';
import { DOTS } from 'src/constants/constants.data';
import { HomeService } from "../../data/home.service"
import { MatDialog } from '@angular/material/dialog';
import { WorkSpaceModalComponent } from '../work-space-modal/work-space-modal.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  readonly dots = DOTS;
  
  workspace: Workspace[] = [];

  isWorkspaceVisible = true;
  
  constructor(
    private homeService: HomeService, 
    public dialogRef: MatDialog
    ){}

	ngOnInit(): void {
    this.homeService.getUserWorkSpace(["user-id"]).subscribe((res:any)=>{
      this.workspace = res.WORK_SPACE;
    })
	}

  toggleWorkspaceVisibility(): void{
    this.isWorkspaceVisible = !this.isWorkspaceVisible
  }


  createWorkSpace(): void{
    this.dialogRef.open(WorkSpaceModalComponent, {
      width:'60vw',  
      height:'55vh',
    });
  }
}
