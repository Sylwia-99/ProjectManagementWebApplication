import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PRODUCT_BACKLOG } from '../core/_database/product-backlog';

@Injectable()
export class ProductBacklogService {
  getUserProductBacklog([personUUID]: string[]): Observable<any> {
    return new Observable<any>((subscriber) => {
      subscriber.next({
        PRODUCT_BACKLOG,
      });

      subscriber.complete();
    });
  }
}
