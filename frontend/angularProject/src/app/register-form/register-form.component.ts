import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PATTERN } from 'src/constants/constants.data';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  readonly EMAIL_FORMAT = PATTERN.FORMAT.EMAIL;

  readonly PASSWORD_FORMAT = PATTERN.FORMAT.PASSWORD;

  readonly TEXT_FORMAT = PATTERN.FORMAT.TEXT;

  isInvalidFlag = false;

  name = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(this.TEXT_FORMAT)]);
  surname = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(this.TEXT_FORMAT)]);
  email = new FormControl('', [Validators.required, Validators.pattern(this.EMAIL_FORMAT)]);
  password = new FormControl('', [Validators.required, Validators.pattern(this.PASSWORD_FORMAT)]);
  confirmPassword = new FormControl('', [Validators.required]);

  registerForm: FormGroup = this.builder.group({
    name: this.name,
    surname: this.surname,
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword
  },  
  {
    validator: this.ConfirmedValidator('password', 'confirmPassword'),
  });

  constructor (private builder: FormBuilder, private router: Router) { }

  register() {
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      const navigationDetails: string[] = ['/login'];

      this.router.navigate(navigationDetails)
    }
    else{
      this.isInvalidFlag = true;
    }
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}