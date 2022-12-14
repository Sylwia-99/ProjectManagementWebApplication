import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeycloakGuard } from './guards/keycloak.guard';

import { ProductBackolgComponent } from './product-backlog/product-backlog.component';
import { UserSettingResolver } from './services/user-setting.resolver';
import { SprintComponent } from './sprint/sprint.component';

const routes: Routes = [{
  path: '',
  canActivate: [KeycloakGuard],
  data: {
    roles: ['user', 'admin'],
    keycloakLogic: 'or',
  },
  resolve: { UserSettingResolver },
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
          { 
            path: 'product-backlog', 
            component: ProductBackolgComponent },
          {
            path: 'sprint/:uuid', 
            component: SprintComponent,
          },
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
export class AppRoutingModule {}
