import { Component, OnInit } from '@angular/core';

import { Workspace } from 'src/interfaces/workspace';
import { DOTS } from 'src/constants/constants.data';
import { HomeService } from "../../data/home.service"

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  readonly dots = DOTS;
  
  workspace: Workspace[] = [];

  isWorkspaceVisible = true;
  
  constructor(private homeService: HomeService){}

	ngOnInit(): void {
    this.homeService.getUserWorkSpace(["user-id"]).subscribe((res:any)=>{
      this.workspace = res.WORK_SPACE;
    })
	}

  toggleWorkspaceVisibility(): void{
    this.isWorkspaceVisible = !this.isWorkspaceVisible
  }
}
