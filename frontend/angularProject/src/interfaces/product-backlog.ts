export interface Task {
  uuid: string;
  name: string;
  acceptanceCriteria: string,
  userUuid: string, 
  status: StatusType;
  userFullName?: string;
  description?: string;
  storyPoints: number;
}

export interface ProductBacklog {
  uuid: string;
  name: string;
  description?: string;
  backlog?: Task[];
  sprints?: Sprint[];
}

export interface Sprint {
  uuid: string;
  name: string;
  goal?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  tasks?: Task[];
}

export interface SprintCreateRequest {
  name: string;
  goal?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}

export interface TaskCreateRequest {
  name: string;
  acceptanceCriteria: string,
  userUuid: string, 
  status: StatusType;
  description?: string;
  storyPoints: number;
}

export const enum StatusType {
  TO_DO ="TO DO",
  IN_PROGRESS = "IN PROGRESS",
  VERIFICATION = "VERIFICATION",
  DONE = "DONE"
}

export interface User {
  uuid: string;
  name: string;
  surname: string;
  email: string;
}

export interface ComboData {
  value: string;
  label: string
}
