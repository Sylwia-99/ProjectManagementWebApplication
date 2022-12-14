export const ENDPOINTS = {
  USER: {
    GET: {
      GET_USER_SETTINGS: `${window.location.origin}/user/user-settings`,
    },
    POST: {},
    PUT: {},
    DELETE: {},
    PATCH: {},
  },

  WORK_SPACE: {
    GET: {
      GET_USER_WORK_SPACES: `${window.location.origin}/workspace/{user-uuid}`,
    },
    POST: {
      CREATE_USER_WORK_SPACE: `${window.location.origin}/workspace/{user-uuid}`,
    },
    PUT: {
      ADD_MEMBER:`${window.location.origin}/workspace/{user-uuid}`
    },
    DELETE: {},
    PATCH: {},
  },

  PRODUCT_BACKLOG: {
    GET: {
      GET_USER_PRODUCT_BACKLOG: `${window.location.origin}/product-backlog/{user-uuid}`,
      GET_TASK: `${window.location.origin}/product-backlog/task/{task-uuid}`,
      GET_SPRINT: `${window.location.origin}/product-backlog/{product-backlog-uuid}/sprint/{sprint-uuid}`,
    },
    POST: {
      CREATE_SPRINT: `${window.location.origin}/product-backlog/sprint/{user-uuid}`,
      CREATE_TASK: `${window.location.origin}/product-backlog/{workspace-uuid}/task/{user-uuid}`,
    },
    PUT: {
      MOVE_TASK_TO_SPRINT: `${window.location.origin}/product-backlog/{user-uuid}/task/{task-uuid}/sprint/{sprint-uuid}`,
      EDIT_TASK: `${window.location.origin}/product-backlog/{workspace-uuid}/task/{user-uuid}`,
    },
    DELETE: {},
    PATCH: {},
  },
};
