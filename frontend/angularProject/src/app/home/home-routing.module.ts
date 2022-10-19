import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const primary_routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]


const routes: Routes = [
  {
    path: '',
    children:primary_routes,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
