import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProductBackolgComponent } from './product-backlog/product-backlog.component';

const routes: Routes = [
  {
    path: '',
    data: {
      roles: [],
    },
    component: NavigationComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            loadChildren: () =>
              import('./home/home.module').then((m) => m.HomeModule),
          },
          { path: 'login', component: LoginFormComponent },
          { path: 'register', component: RegisterFormComponent },
          { path: 'product-backlog', component: ProductBackolgComponent },
        ],
      },
      {
        path: '**',
        component: NavigationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
