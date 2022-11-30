import { Component, OnInit } from '@angular/core';

import { ProductBacklog } from 'src/interfaces/product-backlog';
import { DOTS } from 'src/constants/constants.data';
import { ProductBacklogService } from '../../data/product-backlog.service';

@Component({
  selector: 'product-backlog',
  templateUrl: './product-backlog.component.html',
})
export class ProductBackolgComponent {
  productBacklog: ProductBacklog[] = [];

  constructor(private productBacklogService: ProductBacklogService) {}

  ngOnInit(): void {
    this.productBacklogService
      .getUserProductBacklog(['user-id'])
      .subscribe((res: any) => {
        this.productBacklog = res.PRODUCT_BACKLOG;
      });
  }
}
