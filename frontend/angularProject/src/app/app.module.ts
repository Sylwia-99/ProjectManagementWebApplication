import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LogoPanelComponent } from './commons/logo-panel/logo-panel.component';
import { ErrorMessageComponent } from './commons/error-message/error-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkSpaceModalComponent } from './work-space-modal/work-space-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    LogoPanelComponent,
    ErrorMessageComponent,
    WorkSpaceModalComponent,
  ],
  imports: [
    AppRoutingModule, 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule, 
    MatInputModule,
    NavigationModule, 
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class AppModule { }
