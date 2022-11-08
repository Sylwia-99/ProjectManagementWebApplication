import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WORK_SPACE } from '../core/_database/work-space'

@Injectable()
export class HomeService {
	getUserWorkSpace(
		[personUUID]: string[]
	): Observable<any> {
		return new Observable<any>((subscriber) => {
			subscriber.next({
				WORK_SPACE
			});
			subscriber.complete();
		});
	}
}
