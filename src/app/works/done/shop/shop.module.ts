import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopIntroComponent } from './shop-intro/shop-intro.component';
import { ShopColorPaletteComponent } from './shop-color-palette/shop-color-palette.component';
import { ShopPrototypeComponent } from './shop-prototype/shop-prototype.component';
import { ShopVideoComponent } from './shop-video/shop-video.component';
import { ShopRoutingModule } from './shop-routing.module';
import { BackButtonModule } from '../back-button/back-button.module';
import { ColorBoxComponent } from './color-box/color-box.component';
import { VideoModule } from '../video/video.module';
import { NavButtonModule } from '../../nav-button/nav-button.module';

@NgModule({
  declarations: [
    ShopIntroComponent,
    ShopColorPaletteComponent,
    ShopPrototypeComponent,
    ShopVideoComponent,
    ColorBoxComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    BackButtonModule,
    VideoModule,
    NavButtonModule,
  ],
})
export class ShopModule {}
