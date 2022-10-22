import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent { 
@Input() control = new FormControl(); 

@Input() controlName = ''
}
