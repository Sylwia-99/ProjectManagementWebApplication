import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root',
})
export class EndpointUtilService {
	static prepareEndpoint(
		endpoint: string,
		args: Record<string, any>
	): string {
		return Object.keys(args).reduce(
			(url, arg) => url.replace(`{${arg}}`, args[arg]),
			endpoint
		);
	}
} 