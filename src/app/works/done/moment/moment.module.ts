import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentIntroComponent } from './moment-intro/moment-intro.component';
import { MomentVideoComponent } from './moment-video/moment-video.component';
import { BackButtonModule } from '../back-button/back-button.module';
import { SliderModule } from '../slider/slider.module';
import { MomentRoutingModule } from './moment-routing.module';
import { VideoModule } from '../video/video.module';

@NgModule({
  declarations: [MomentIntroComponent, MomentVideoComponent],
  imports: [
    CommonModule,
    MomentRoutingModule,
    BackButtonModule,
    SliderModule,
    VideoModule,
  ],
})
export class MomentModule {}
