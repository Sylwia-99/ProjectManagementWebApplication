import { KeycloakOptions } from "keycloak-angular";

const keycloakOptions: KeycloakOptions = {
	initOptions: {
		pkceMethod: 'S256', 
		redirectUri: 'http://localhost:4200/home',   
		checkLoginIframe: false,
		onLoad: 'login-required'
	},
    config: {
        realm: 'master',
        url: 'http://localhost:8080/auth',
        clientId: 'frontend',  
    },
	enableBearerInterceptor: true,
	loadUserProfileAtStartUp: true,
};

export const ENVIRONMENT = { 
    LANG: ['pl', 'ang'],
	DEFAULT_LANG: 'pl',
	KEYCLOAK_OPTIONS: keycloakOptions,
}; 