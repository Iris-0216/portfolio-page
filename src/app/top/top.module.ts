import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [TopComponent, MenuItemComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class TopModule {}
