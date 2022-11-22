interface Task {
  uuid?: string;
  name?: string;
}

export interface Sprint {
  uuid?: string;
  name?: string;
  tasks?: Task[];
}

export interface ProductBacklog {
  name: string;
  uuid: string;
  description?: string;
  backlog?: Task[];
  sprints?: Sprint[];
}
