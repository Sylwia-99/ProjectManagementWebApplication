import { Component, OnInit } from '@angular/core';

import { WorkSpace } from 'src/interfaces/workspace';
import { DOTS } from 'src/constants/constants.data';
import { WorkspaceService } from "../../data/work-space.service"

import { MatDialog } from '@angular/material/dialog';
import { WorkSpaceModalComponent } from '../work-space-modal/work-space-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  readonly dots = DOTS;
  
  workspace: WorkSpace[] = [];

  isWorkspaceVisible = true;
  
  constructor(
    private workspaceService: WorkspaceService, 
    public dialogRef: MatDialog,
    private router: Router
    ){}

	ngOnInit(): void {
    this.workspaceService.getUserWorkSpace(["user-id"]).subscribe((res:any)=>{
      this.workspace = res.WORK_SPACE;
    })
	}

  toggleWorkspaceVisibility(): void{
    this.isWorkspaceVisible = !this.isWorkspaceVisible
  }


  createWorkSpace(): void{
    const dialog = this.dialogRef.open(WorkSpaceModalComponent, {
      width:'60vw',  
      height:'26rem',
    });

    dialog.afterClosed().subscribe((result: WorkSpace) => {
      if(result)
        this.workspace.push(result)
    });
  }

  viewBacklog(): void {
    this.router.navigate(['/product-backlog']);
  }
}
