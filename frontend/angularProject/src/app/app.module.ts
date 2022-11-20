import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LogoPanelComponent } from './commons/logo-panel/logo-panel.component';
import { ErrorMessageComponent } from './commons/error-message/error-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductBackolgComponent } from './product-backlog/product-backlog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    LogoPanelComponent,
    ErrorMessageComponent,
    ProductBackolgComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
