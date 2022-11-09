import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

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
		 return of({"userFullName":"Sylwia Rusek","userUuid":"548ff539-d188-4c2c-806b-d03036817281", "username": "mosurs"})
		// return this.http.get<any>(this.ENDPOINTS.USER.GET.GET_USER_SETTINGS)
		// 	.pipe(map(event => event.json()));
		}
}