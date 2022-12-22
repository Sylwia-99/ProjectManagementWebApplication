import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AddSprintModalComponent } from '../modals/add-sprint-modal/add-sprint-modal.component';
import { ProductBacklog, Sprint, Task } from 'src/interfaces/product-backlog';
import { DOTS } from 'src/constants/constants.data';
import { TaskModalComponent } from '../modals/task-modal/task-modal.component';
import { AddMemberModalComponent } from '../modals/add-member/add-member-modal.component';

@Component({
  selector: 'product-backlog-workspace',
  templateUrl: './product-backlog-workspace.component.html',
})
export class ProductBackolgWorkspaceComponent {
  @Input() productBacklog: ProductBacklog;

  @Output() callbackRefreshProductBacklog: EventEmitter<any> =
  new EventEmitter();

  readonly dots = DOTS;

  isProductBacklogVisible = true;

  constructor(public dialogRef: MatDialog, private router: Router) {}

  toggleProductBacklogVisibility(): void {
    this.isProductBacklogVisible = !this.isProductBacklogVisible;
  }

  createSprint(): void {
    const dialog = this.dialogRef.open(AddSprintModalComponent, {
      width: '60vw',
      height: '51vh',
    });

    dialog.afterClosed().subscribe((result: Sprint) => {
      if(result)
        this.productBacklog?.sprints?.push(result);
    });
  }

  createTask(): void {
    const dialog = this.dialogRef.open(TaskModalComponent, {
      width: '60vw',
      height: '52rem',
    });

    dialog.afterClosed().subscribe((result: Task) => {
      if(result)
        this.productBacklog?.backlog?.push(result);
    });
  }

  addMember():void{
    const dialog = this.dialogRef.open(AddMemberModalComponent, {
      width: '30vw',
      height: '12rem',
    });

    dialog.afterClosed().subscribe((result: any) => {
      if(result)
        console.log("dodano członka")
    });
  }

  viewSprint(productBacklog: string, sprintUuid: string): void {
    this.router.navigate(['/sprint/', sprintUuid], {
      queryParams: { productBacklog: productBacklog },
    });
  }

  refreshProductBacklog(): void {
    this.callbackRefreshProductBacklog.emit();
    }

  editTask(task: Task): void{
    this.callbackRefreshProductBacklog.emit();
  }
}