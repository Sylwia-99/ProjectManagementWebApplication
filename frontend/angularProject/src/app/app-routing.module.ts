import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeycloakGuard } from './guards/keycloak.guard';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserSettingResolver } from './services/user-setting.resolver';

const routes: Routes = [{
  path: '',
  canActivate: [KeycloakGuard],
  data: {
    roles: ['user', 'admin'],
    keycloakLogic: 'or',
  },
  resolve: {UserSettingResolver},
  children: [ 
      { 
        path: '',
        children: [
          {
          path: '',
          pathMatch: 'full',
          redirectTo: 'home'
          },
          {
            path: 'home', 
            loadChildren: () =>
              import('./home/home.module').then(
                (m) => m.HomeModule
                ) 
          },
          //{ path: 'login', component: LoginFormComponent },
          //{ path: 'register', component: RegisterFormComponent },
        ]
      }
    ]
  }
] 


@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
  providers: [UserSettingResolver]
})
export class AppRoutingModule { }
