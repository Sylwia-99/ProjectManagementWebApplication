import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { LOCAL_STORAGE } from 'src/constants/constants.data';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserSettingResolver implements Resolve<any> {
	constructor(
		private authenticationService: AuthenticationService,
	) {}

	resolve(): void {
		this.authenticationService
		.isLoggedIn()
		.then( loggedIn => {
			if( loggedIn ) {
				this.authenticationService.loadUserProfile()
					.then((profile: any) => {
						localStorage.setItem(LOCAL_STORAGE.USERNAME,
							LOCAL_STORAGE.USERNAME!== undefined
							? profile?.username
							: null
						);
						localStorage.setItem(LOCAL_STORAGE.USER_ID,
							LOCAL_STORAGE.USERNAME!== undefined
							? profile?.id 
							: null
						);
						localStorage.setItem(LOCAL_STORAGE.USER_NAME,
							LOCAL_STORAGE.USERNAME!== undefined
							? profile?.firstName 
							: null
						);
						localStorage.setItem(LOCAL_STORAGE.USER_SURNAME,
							LOCAL_STORAGE.USERNAME!== undefined
							? profile?.lastName 
							: null
						);
						localStorage.setItem(LOCAL_STORAGE.USER_EMAIL,
							LOCAL_STORAGE.USERNAME!== undefined
							? profile?.email 
							: null
						);
					})
					.catch( reason => {console.log( reason )});
			}
		})
	}
}