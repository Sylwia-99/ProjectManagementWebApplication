export interface Task {
  uuid: string;
  name: string;
  acceptanceCriteria: string,
  userUuid: string, 
  status: StatusType;
  description?: string;
  storyPoints: number;
}

export interface SprintProductBacklog {
  uuid: string;
  name: string;
  tasks?: Task[];
}

export interface ProductBacklog {
  uuid: string;
  name: string;
  description?: string;
  backlog?: Task[];
  sprints?: SprintProductBacklog[];
}

export interface Sprint {
  uuid: string;
  name: string;
  goal?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
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
  TO_DO ="TO_DO",
  IN_PROGRESS = "IN_PROGRESS",
  VERIFICATION = "VERIFICATION",
  DONE = "DONE"
}

