import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { UserService } from 'src/data/user.service';
import { LOCAL_STORAGE } from 'src/constants/constants.data';

@Injectable()
export class UserSettingResolver implements Resolve<any> {
	constructor(private userService: UserService) {}

	resolve(): void {
		this.userService.getUserSettings().subscribe({
			next: (userSettings) => {
				localStorage.setItem(
					LOCAL_STORAGE.USERNAME,
					userSettings?.username !== undefined
						? userSettings?.username
						: 'MOCK'
				);
			},
			error: () => {	
			},
		});
	}
}
 