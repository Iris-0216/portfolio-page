import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopIntroComponent } from './shop-intro/shop-intro.component';
import { ShopColorPaletteComponent } from './shop-color-palette/shop-color-palette.component';
import { ShopPrototypeComponent } from './shop-prototype/shop-prototype.component';
import { ShopVideoComponent } from './shop-video/shop-video.component';

const routes: Routes = [
  { path: '', component: ShopIntroComponent },
  {
    path: 'color',
    component: ShopColorPaletteComponent,
  },
  {
    path: 'prototype',
    component: ShopPrototypeComponent,
  },
  {
    path: 'video',
    component: ShopVideoComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
