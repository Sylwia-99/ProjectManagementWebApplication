interface Task {
  uuid: string;
  name: string;
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
