import { Component, Input } from '@angular/core';

import { ComboData } from 'src/interfaces/product-backlog';
import { Task } from 'src/interfaces/product-backlog';

@Component({
  selector: 'status-column',
  templateUrl: './status-column.component.html',
})
export class StatusColumnComponent {

 @Input() status: ComboData;

 @Input() tasks: Task[] | undefined;

  isStatusColumnVisible = true;

  constructor() {}

  toggleStatusColumnVisibility(): void {
    this.isStatusColumnVisible = !this.isStatusColumnVisible;
  }

}
