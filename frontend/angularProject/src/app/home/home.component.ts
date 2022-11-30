import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { WorkSpace } from 'src/interfaces/workspace';
import { DOTS } from 'src/constants/constants.data';
import { AuthenticationService } from '../services/authentication.service';
import { WorkspaceService } from "../../data/work-space.service"
import { WorkSpaceModalComponent } from '../work-space-modal/work-space-modal.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  readonly dots = DOTS;
  
  workspace: WorkSpace[] = [];

  isWorkspaceVisible = true;
  
  constructor(
    private authenticationService: AuthenticationService, 
    private workspaceService: WorkspaceService, 
    public dialogRef: MatDialog
    ){}

	ngOnInit(): void {
    this.workspaceService.getUserWorkSpace(["user-id"]).subscribe((res:any)=>{
      this.workspace = res.WORK_SPACE;
    })
	}

  toggleWorkspaceVisibility(): void{
    this.isWorkspaceVisible = !this.isWorkspaceVisible
  }

  logout(): void{
    this.authenticationService.logout()
  }

  createWorkSpace(): void{
    const dialog = this.dialogRef.open(WorkSpaceModalComponent, {
      width:'60vw',  
      height:'55vh',
    });

    dialog.afterClosed().subscribe((result: WorkSpace) => {
      this.workspace.push(result)
    });
  }
}
