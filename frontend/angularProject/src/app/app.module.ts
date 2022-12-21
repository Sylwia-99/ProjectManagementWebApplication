import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule } from 'keycloak-angular';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LogoPanelComponent } from './commons/logo-panel/logo-panel.component';
import { ErrorMessageComponent } from './commons/error-message/error-message.component';
import { keycloakInitializer } from './inceptors/keycloack-initializer';
import { KeycloakInterceptor } from './inceptors/keycloack.interceptor';
import { AuthenticationService } from './services/authentication.service';
import { ProductBackolgComponent } from './product-backlog/product-backlog.component';
import { AppHeaderComponent } from './commons/app-header/app-header.component';
import { HomeModule } from './home/home.module';
import { ProductBackolgWorkspaceComponent } from './product-backlog/workspace/product-backlog-workspace.component';
import { ProductBacklogService } from 'src/data/product-backlog.service';
import { ProductBackolgTaskComponent } from './product-backlog/task/product-backlog-task.component';
import { WorkSpaceModalComponent } from './work-space-modal/work-space-modal.component';
import { AddSprintModalComponent } from './product-backlog/modals/add-sprint-modal/add-sprint-modal.component';
import { TaskModalComponent } from './product-backlog/modals/task-modal/task-modal.component';
import { ViewComponent } from './product-backlog/modals/task-modal/view/view.component';
import { SprintComponent } from './sprint/sprint.component';
import { StatusColumnComponent } from './sprint/status-column/status-column.component';
import { TaskComponent } from './sprint/status-column/task/task.component';
import { MoveTaskToSprintModalComponent } from './product-backlog/modals/move-task-to-sprint-modal/move-task-to-sprint-modal.component';
import { AddMemberModalComponent } from './product-backlog/modals/add-member/add-member-modal.component';

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
    WorkSpaceModalComponent,
    AddSprintModalComponent,
    TaskModalComponent,
    ViewComponent,
    SprintComponent,
    StatusColumnComponent,
    TaskComponent,
    MoveTaskToSprintModalComponent,
    AddMemberModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    HomeModule,
    MatMenuModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    NavigationModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    KeycloakAngularModule,
    NavigationModule, 
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: keycloakInitializer,
      multi: true,
      deps: [AuthenticationService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: KeycloakInterceptor,
      multi: true,
    },
    { 
      provide: MAT_DIALOG_DEFAULT_OPTIONS, 
      useValue: { hasBackdrop: false } 
    },
    ProductBacklogService,
    MatDatepickerModule,
  ]
})
export class AppModule {}
