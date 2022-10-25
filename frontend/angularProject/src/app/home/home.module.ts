import { NgModule } from '@angular/core';
import { AppHeaderComponent } from '../commons/app-header/app-header.component';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule
  ],
  providers: [],
})
export class HomeModule { }
