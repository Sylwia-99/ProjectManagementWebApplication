import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AddSprintModalComponent } from '../modals/add-sprint-modal.component';
import { ProductBacklog, Sprint, Task } from 'src/interfaces/product-backlog';
import { DOTS } from 'src/constants/constants.data';
import { TaskModalComponent } from '../modals/task-modal/task-modal.component';

@Component({
  selector: 'product-backlog-workspace',
  templateUrl: './product-backlog-workspace.component.html',
})
export class ProductBackolgWorkspaceComponent {
  @Input() productBacklog: ProductBacklog;

  readonly dots = DOTS;

  isProductBacklogVisible = true;

  constructor(
    public dialogRef: MatDialog,
    private router: Router
    ) {}

  toggleProductBacklogVisibility(): void {
    this.isProductBacklogVisible = !this.isProductBacklogVisible;
  }

  createSprint(): void {
    const dialog = this.dialogRef.open(AddSprintModalComponent, {
      width: '60vw',
      height: '50vh',
    });

    dialog.afterClosed().subscribe((result: Sprint) => {
      this.productBacklog?.sprints?.push(result)
    });
  }

  createTask(): void {
    const dialog = this.dialogRef.open(TaskModalComponent, {
      width: '60vw',
      height: '75vh',
    });

    dialog.afterClosed().subscribe((result: Task) => {
      this.productBacklog?.backlog?.push(result)
    });
  }

  viewSprint(productBacklog: string, sprintUuid: string): void{
    this.router.navigate(['/sprint/', sprintUuid],    
      { queryParams: { productBacklog: productBacklog }}
    )
  }
}
