import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { EndpointUtilService } from 'src/app/services/endpoint-util.service';

import { WorkSpace, WorkSpaceCreateRequest } from 'src/interfaces/workspace';
import { ENDPOINTS } from '../constants/endpoints.data';
import { WORK_SPACE } from '../core/_database/work-space'

@Injectable({
	providedIn: 'root',
})
export class WorkspaceService {
	private readonly ENDPOINTS = ENDPOINTS;

	constructor(
		private http: HttpClient
	) {}

	getUserWorkSpace(
		[personUUID]: string[]
	): Observable<any> {
		return new Observable<any>((subscriber) => {
			subscriber.next({
				WORK_SPACE
			});

			subscriber.complete();
		});
		// return this.http.get<any>(this.ENDPOINTS.WORK_SPACE.GET.GET_USER_WORK_SPACES)
		// 	.pipe(map(event => event.json()));
	}

	createUserWorkSpace(
		workSpace: WorkSpaceCreateRequest,
		[personUUID]: string[]
	): Observable<WorkSpace> {
		const endpoint = `${EndpointUtilService.prepareEndpoint(
			this.ENDPOINTS.WORK_SPACE.POST.CREATE_USER_WORK_SPACE,
			{ 'user-uuid': personUUID }
		)}`;

		return this.http.post<WorkSpace>(endpoint, workSpace)
			.pipe(map((response) => response),
			catchError((error) => {
				console.log(error)
				let newWorkSpace: WorkSpace = {...workSpace, uuid: '0-0-0-4'}
				return of(newWorkSpace)
			})
		); 
	}

	addMember(
		workspaceData: WorkSpace,
		wokrkspaceUUID: string
	  ): Observable<WorkSpace> {
		const endpoint = `${EndpointUtilService.prepareEndpoint(
		  this.ENDPOINTS.PRODUCT_BACKLOG.PUT.EDIT_TASK,
		  { 'workspace-uuid': wokrkspaceUUID }
		)}`;
	
		return this.http.put<WorkSpace>(endpoint, workspaceData).pipe(
		  map((response) => response),
		  catchError((error) => {
			console.log(error);
			return of(workspaceData);
		  })
		)
	  }
}
