
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
		PUT: {},
		DELETE: {},
		PATCH: {},
	},
};