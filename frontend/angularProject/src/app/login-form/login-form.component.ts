import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { LOGO, PATTERN } from 'src/constants/constants.data';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent  {
  readonly EMAIL_FORMAT = PATTERN.FORMAT.EMAIL;
  readonly logo = LOGO;

  isInvalidFlag = false;

  email = new FormControl('', [Validators.required, Validators.pattern(this.EMAIL_FORMAT)]);
  password = new FormControl('', [Validators.required]);
  
  loginForm: FormGroup = this.builder.group({
    email: this.email,
    password: this.password
  });

  constructor (private builder: FormBuilder) { }

  login() {
    // Attempt Logging in...
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }
    else{
      this.isInvalidFlag = true;
    }
  }

}
