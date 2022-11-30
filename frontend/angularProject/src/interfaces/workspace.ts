export interface WorkSpace {
	uuid: string;
	name: string;
	description?: string;
}

export interface WorkSpaceCreateRequest {
	name: string;
	description?: string;
}
