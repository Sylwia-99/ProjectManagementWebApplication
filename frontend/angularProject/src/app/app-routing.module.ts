import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [{
  path: '',
  data:{
    roles: [],
  },
  component: NavigationComponent,
  children: [ {
    path: '', 
    children:[
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
      }
    ]
  }, 
  {
    path: '**',
    component: NavigationComponent
  }
] 

}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
