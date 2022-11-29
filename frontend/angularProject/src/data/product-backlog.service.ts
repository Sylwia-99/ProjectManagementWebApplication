import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import {
  SprintCreateRequest,
  Task,
  Sprint,
  TaskCreateRequest,
} from '../interfaces/product-backlog';
import { EndpointUtilService } from 'src/app/services/endpoint-util.service';
import { PRODUCT_BACKLOG } from '../core/_database/product-backlog';
import { ENDPOINTS } from '../constants/endpoints.data';

@Injectable()
export class ProductBacklogService {
  private readonly ENDPOINTS = ENDPOINTS;

  constructor(private http: HttpClient) {}

  getUserProductBacklog([personUUID]: string[]): Observable<any> {
    return new Observable<any>((subscriber) => {
      subscriber.next({
        PRODUCT_BACKLOG,
      });

      subscriber.complete();
    });
  }

  createSprint(
    sprintData: SprintCreateRequest,
    [personUUID, workspaceUUID]: string[]
  ): Observable<Sprint> {
    const endpoint = `${EndpointUtilService.prepareEndpoint(
      this.ENDPOINTS.PRODUCT_BACKLOG.POST.CREATE_SPRINT,
      { 'user-uuid': personUUID, 'workspace-uuid': workspaceUUID }
    )}`;

    return this.http.post<Sprint>(endpoint, sprintData).pipe(
      map((response) => response),
      catchError((error) => {
        console.log(error);
        let newSprint: Sprint = { ...sprintData, uuid: '0-0-0-4' };
        return of(newSprint);
      })
    );
  }

  createTask(
    taskData: TaskCreateRequest,
    [personUUID, workspaceUUID]: string[]
  ): Observable<Task> {
    const endpoint = `${EndpointUtilService.prepareEndpoint(
      this.ENDPOINTS.PRODUCT_BACKLOG.POST.CREATE_TASK,
      { 'user-uuid': personUUID, 'workspace-uuid': workspaceUUID }
    )}`;

    return this.http.post<Task>(endpoint, taskData).pipe(
      map((response) => response),
      catchError((error) => {
        console.log(error);
        let newTask: Task = { ...taskData, uuid: '0-0-0-4' };
        return of(newTask);
      })
    );
  }
}
