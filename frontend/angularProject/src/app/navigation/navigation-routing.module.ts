import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const primary_routes: Routes = []


const routes: Routes = [{
  path: '',
  children: primary_routes,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
