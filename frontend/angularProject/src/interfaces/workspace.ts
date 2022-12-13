export interface WorkSpace {
	uuid: string;
	name: string;
	description?: string;
	members?: string[];
}

export interface WorkSpaceCreateRequest {
	name: string;
	description?: string;
}
