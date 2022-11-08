import { KeycloakService } from 'keycloak-angular';
import { ENVIRONMENT } from '../environments/environments';
import { AuthenticationService } from '../services/authentication.service';

export function keycloakInitializer(
	authenticationService: AuthenticationService
): () => Promise<any> {
	return (): Promise<any> => {
		return authenticationService
			.init(ENVIRONMENT.KEYCLOAK_OPTIONS)
			.then((isInitialized) => {
				if (isInitialized) {
					const keycloakInstance =
						authenticationService.getKeycloakInstance();
					keycloakInstance.onTokenExpired = () => {
						authenticationService.logout();
					};
				}
			});
	};
}

  