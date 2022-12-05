import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

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
import { WorkSpaceModalComponent } from './work-space-modal/work-space-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { AddSprintModalComponent } from './product-backlog/modals/add-sprint-modal/add-sprint-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TaskModalComponent } from './product-backlog/modals/task-modal/task-modal.component';
import { SprintComponent } from './sprint/sprint.component';
import { StatusColumnComponent } from './sprint/status-column/status-column.component';
import { TaskComponent } from './sprint/status-column/task/task.component';

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
    SprintComponent,
    StatusColumnComponent,
    TaskComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
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
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    ProductBacklogService,
    MatDatepickerModule,
  ],
})
export class AppModule {}
