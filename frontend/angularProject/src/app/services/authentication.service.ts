import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService extends KeycloakService {
	isAuthenticated(): boolean {
		if (this.getKeycloakInstance() === null) {
			return false;
		}
        const isAuthenticated = this.getKeycloakInstance().authenticated || false;
		return isAuthenticated;
	}

	async getProfileName(): Promise<string> {
		const { firstName, lastName } = await super.loadUserProfile();
		return Promise.resolve(`${firstName} ${lastName}`);
	}

	checkUserRoles(roles: string[], logic = 'and'): boolean {
		const userRoles = this.getUserRoles();

		if (this.isAuthenticated() && logic === 'and') {
			return roles.reduce(
				(sum, role) => sum && userRoles.indexOf(role) > -1,
				true
			);
		}

		if (this.isAuthenticated() && logic === 'or') {
			return roles.reduce(
				(sum, role) => sum || userRoles.indexOf(role) > -1,
				false
			);
		}

		return false;
	}

	override getUserRoles(allRoles?: boolean): string[] {
		if (this.isAuthenticated()) {
			return super.getUserRoles(allRoles);
		}

		return [];
	}

	override logout(
		redirectUri: string = `${window.location.origin}/login`
	): Promise<void> {
		return super.logout(redirectUri);
	}

	override login(options?: Keycloak.KeycloakLoginOptions): Promise<void> {
		return super.login(options);
	}

	forceRefreshToken(): Promise<boolean> {
		return super.updateToken(-1);
	}
}