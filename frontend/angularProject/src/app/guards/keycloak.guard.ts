import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	Router,
	RouterStateSnapshot,
} from '@angular/router';
import { KeycloakAuthGuard } from 'keycloak-angular';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({
	providedIn: 'root',
})
export class KeycloakGuard extends KeycloakAuthGuard {
	constructor(
		protected override router: Router,
		protected authenticationService: AuthenticationService
	) {
		super(router, authenticationService);
	}

	isAccessAllowed(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean> {
		return new Promise((resolve, reject) => {
			if (!this.authenticated) {
				const redirectUri = window.location.origin + state.url;
				this.authenticationService.login({ redirectUri });

				resolve(false);
				return;
			}

			const isAccessGranted = this.checkUserRoles(route);
			if (!isAccessGranted) {
				this.router.navigateByUrl('/home');
				this.openAccessDeniedModal();
			}

			resolve(isAccessGranted);
		});
	}

	private checkUserRoles(route: ActivatedRouteSnapshot) {
        console.log(route)
		const requiredRoles: string[] = route.data['roles'];
		const keycloakLogic = route.data['keycloakLogic'] || 'and';

		let isAccessGranted = false;

		// requiredRoles was not provided or got an empty array
		if (!requiredRoles || requiredRoles.length === 0) {
			isAccessGranted = true;
		} else if (!this.roles || this.roles.length === 0) {
			isAccessGranted = false;
		} else if (keycloakLogic === 'and') {
			isAccessGranted = requiredRoles.reduce(
				(acc, curr) => acc && this.roles.indexOf(curr) > -1,
				true
			);
		} else if (keycloakLogic === 'or') {
			isAccessGranted = requiredRoles.reduce(
				(acc, curr) => acc || this.roles.indexOf(curr) > -1,
				false
			);
		}

		return isAccessGranted;
	}

	private openAccessDeniedModal(): void {
        console.log('nie masz uprawnień do tej strony')
		alert('nie masz uprawnień do tej strony');
	}
}