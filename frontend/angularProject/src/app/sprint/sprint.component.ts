import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { STATUSES } from 'src/core/_database/product-backlog';
import { ProductBacklogService } from 'src/data/product-backlog.service';
import { Sprint } from 'src/interfaces/product-backlog';

@Component({
  selector: 'sprint-view',
  templateUrl: './sprint.component.html',
})
export class SprintComponent implements OnInit {
  sprint: Sprint | undefined;

  statuses = STATUSES;
  
  constructor(
    private route: ActivatedRoute,
    private productBacklogService: ProductBacklogService
  ){}

  ngOnInit(): void {
    this.getSprintInformation()
  }

  getSprintInformation(): void{
    const uuid: string = this.route.snapshot.params['uuid'];
    const productBacklogUuid: string= this.route.snapshot.queryParams['productBacklog'];

    this.productBacklogService
      .getSprint(uuid, productBacklogUuid)
      .subscribe((res: Sprint) => {
        this.sprint = res;
      });
  }

}
