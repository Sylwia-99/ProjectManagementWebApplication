import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddSprintModalComponent } from '../modals/add-sprint-modal.component';
import { ProductBacklog, Sprint } from 'src/interfaces/product-backlog';
import { DOTS } from 'src/constants/constants.data';

@Component({
  selector: 'product-backlog-workspace',
  templateUrl: './product-backlog-workspace.component.html',
})
export class ProductBackolgWorkspaceComponent {
  @Input() productBacklog: ProductBacklog;

  readonly dots = DOTS;

  isProductBacklogVisible = true;

  constructor(public dialogRef: MatDialog) {}

  toggleProductBacklogVisibility(): void {
    this.isProductBacklogVisible = !this.isProductBacklogVisible;
  }

  createSprint(): void {
    const dialog = this.dialogRef.open(AddSprintModalComponent, {
      width: '60vw',
      height: '55vh',
    });

    dialog.afterClosed().subscribe((result: Sprint) => {});
  }
}
