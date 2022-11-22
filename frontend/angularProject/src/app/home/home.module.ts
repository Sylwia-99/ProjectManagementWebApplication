import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AppHeaderComponent } from '../commons/app-header/app-header.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [AppHeaderComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MatIconModule, MatMenuModule],
  exports: [AppHeaderComponent],
})
export class HomeModule {}
