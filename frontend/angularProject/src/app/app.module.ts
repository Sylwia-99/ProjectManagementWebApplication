import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LogoPanelComponent } from './commons/logo-panel/logo-panel.component';
import { ErrorMessageComponent } from './commons/error-message/error-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductBackolgComponent } from './product-backlog/product-backlog.component';
import { AppHeaderComponent } from './commons/app-header/app-header.component';
import { HomeModule } from './home/home.module';
import { ProductBackolgWorkspaceComponent } from './product-backlog/workspace/product-backlog-workspace.component';
import { ProductBacklogService } from 'src/data/product-backlog.service';
import { ProductBackolgTaskComponent } from './product-backlog/task/product-backlog-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    LogoPanelComponent,
    ErrorMessageComponent,
    ProductBackolgComponent,
    ProductBackolgWorkspaceComponent,
    ProductBackolgTaskComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    ReactiveFormsModule,
    HomeModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [ProductBacklogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
