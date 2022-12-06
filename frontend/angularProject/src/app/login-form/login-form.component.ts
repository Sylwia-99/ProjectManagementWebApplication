import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PATTERN } from 'src/constants/constants.data';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent  {
  readonly EMAIL_FORMAT = PATTERN.FORMAT.EMAIL;

  isInvalidFlag = false;

  email = new FormControl('', [Validators.required, Validators.pattern(this.EMAIL_FORMAT)]);
  password = new FormControl('', [Validators.required]);
  
  loginForm: FormGroup = this.builder.group({
    email: this.email,
    password: this.password
  });

  constructor (private builder: FormBuilder, private router: Router) { }

  login() {
    if(this.loginForm.valid){
      const navigationDetails: string[] = ['/home'];
      this.router.navigate(navigationDetails)
    }
    else{
      this.isInvalidFlag = true;
    }
  }

  register() {
    const navigationDetails: string[] = ['/register'];
    this.router.navigate(navigationDetails)
  }

}
