import { KeycloakOptions } from "keycloak-angular";

const keycloakOptions: KeycloakOptions = {
	initOptions: {
		onLoad: 'check-sso',
		silentCheckSsoRedirectUri: window.location.origin + '/login'
	},
    config: {
        realm: 'master',
        url: 'http://localhost:8080/auth',
        clientId: 'frontend',  
      },
	enableBearerInterceptor: true,
};

export const ENVIRONMENT = { 
    LANG: ['pl', 'ang'],
	DEFAULT_LANG: 'pl',
	KEYCLOAK_OPTIONS: keycloakOptions,
}; 