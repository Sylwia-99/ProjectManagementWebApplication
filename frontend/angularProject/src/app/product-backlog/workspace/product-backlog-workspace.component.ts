import { Component, Input, OnInit } from '@angular/core';

import { ProductBacklog } from 'src/interfaces/product-backlog';
import { DOTS } from 'src/constants/constants.data';

@Component({
  selector: 'product-backlog-workspace',
  templateUrl: './product-backlog-workspace.component.html',
})
export class ProductBackolgWorkspaceComponent {
  @Input() productBacklog: ProductBacklog;

  readonly dots = DOTS;

  isProductBacklogVisible = true;

  ngOnInit(): void {
    console.log(this.productBacklog);
  }

  toggleProductBacklogVisibility(): void {
    this.isProductBacklogVisible = !this.isProductBacklogVisible;
  }
}
