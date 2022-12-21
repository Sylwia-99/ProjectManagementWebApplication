import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { ENDPOINTS } from 'src/constants/endpoints.data';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private readonly ENDPOINTS = ENDPOINTS;

	constructor(
		private http: HttpClient,
	) {}

	getUserSettings(): Observable<any> {
		return this.http.get<any>(this.ENDPOINTS.USER.GET.GET_USER_SETTINGS)
			.pipe(map(event => event.json()));		}
}