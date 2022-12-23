import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import {
  SprintCreateRequest,
  Task,
  Sprint,
  TaskCreateRequest,
  ProductBacklog,
  TaskUpdateRequest,
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

  getSprint(
    sprintUuid: string,
    productBacklogUuid: string
  ): Observable<Sprint> {
    const endpoint = `${EndpointUtilService.prepareEndpoint(
      this.ENDPOINTS.PRODUCT_BACKLOG.GET.GET_SPRINT,
      { 'product-backlog-uuid': productBacklogUuid, 'sprint-uuid': sprintUuid }
    )}`;
    return this.http.get<Sprint>(endpoint).pipe(
      map((response) => response),
      catchError((error) => {
        console.log(error);
        const productBacklog = PRODUCT_BACKLOG.find(
          (el) => el.uuid === productBacklogUuid
        ) as ProductBacklog;
        const sprint = productBacklog?.sprints?.find(
          (el) => el.uuid === sprintUuid
        ) as Sprint;
        return of(sprint);
      })
    );
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
    personUUID: string,
    workspaceUUID: string
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

  moveTaskToSprint(
    body: TaskUpdateRequest,
    [personUUID, sprintUUID]: string[]
  ): Observable<unknown> {
    const endpoint = `${EndpointUtilService.prepareEndpoint(
      this.ENDPOINTS.PRODUCT_BACKLOG.PUT.MOVE_TASK_TO_SPRINT,
      {
        'user-uuid': personUUID,
        'sprint-uuid': sprintUUID,
      }
    )}`;

    return this.http
      .patch<any>(endpoint, body)
      .pipe(map((response) => response.json()),
      catchError(() => {
        return of(body);
    }));
  }

  getTask(uuid: string): Observable< Task> {
      const backlogTask = PRODUCT_BACKLOG[0].backlog!.find(el=> el.uuid === uuid) as Task; 
      let sprintTask = null; 
      PRODUCT_BACKLOG[0].sprints!.forEach((el)=>{
        const task = el.tasks?.find(task=> task.uuid === uuid)
        if(task) {
          sprintTask =  task
          return
        }
      });
      const task = backlogTask ?? sprintTask
      return of(task);
  }  

  
  editTask(
    taskData: Task,
    taskUuid: string
  ): Observable<Task> {
        const backlogTaskIndex = PRODUCT_BACKLOG[0].backlog!.findIndex(el=> el.uuid === taskUuid); 
        if(backlogTaskIndex)
          PRODUCT_BACKLOG[0]!.backlog![backlogTaskIndex] = taskData;
        else {
          PRODUCT_BACKLOG[0].sprints!.forEach((el)=> {
            const sprintTaskIndex = el.tasks?.findIndex(task=>task.uuid === taskUuid)
            if(sprintTaskIndex && sprintTaskIndex > 0){
              PRODUCT_BACKLOG[0].sprints!.forEach((sprint)=>sprint!.tasks![sprintTaskIndex] = taskData)
              return
            }
          }) ;
        }
        return of(taskData);
  }

  removeTask(
    taskUuid: string
  ) {
    console.log(taskUuid)
      const backlogTaskIndex = PRODUCT_BACKLOG[0].backlog!.findIndex(el=> el.uuid === taskUuid); 
      if(backlogTaskIndex != -1)
      PRODUCT_BACKLOG[0]!.backlog!.splice(backlogTaskIndex, 1);
      else
        PRODUCT_BACKLOG[0].sprints!.forEach((el)=> {
            const index = el.tasks?.findIndex(el=>el.uuid === taskUuid)
            if(index != undefined && index >= 0){
              PRODUCT_BACKLOG[0].sprints!.forEach((el)=> el!.tasks!.splice(index, 1))
              return
            }
          }) ;
  }

}
