import { Component, OnInit } from '@angular/core';

import { Workspace } from 'src/interfaces/workspace';
import { DOTS } from 'src/constants/constants.data';
import { HomeService } from "../../data/home.service"
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  readonly dots = DOTS;
  
  workspace: Workspace[] = [];

  isWorkspaceVisible = true;
  
  constructor(
    private authenticationService: AuthenticationService, 
    private homeService: HomeService
  ){}

	ngOnInit(): void {
    this.homeService.getUserWorkSpace(["user-id"]).subscribe((res:any)=>{
      this.workspace = res.WORK_SPACE;
    })
	}

  toggleWorkspaceVisibility(): void{
    this.isWorkspaceVisible = !this.isWorkspaceVisible
  }

  logout(): void{
    this.authenticationService.logout()
  }
}
