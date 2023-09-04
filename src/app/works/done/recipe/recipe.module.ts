import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeIntroComponent } from './recipe-intro/recipe-intro.component';
import { RecipeVideoComponent } from './recipe-video/recipe-video.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { BackButtonModule } from '../back-button/back-button.module';
import { SliderModule } from '../slider/slider.module';
import { VideoModule } from '../video/video.module';

@NgModule({
  declarations: [RecipeIntroComponent, RecipeVideoComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    BackButtonModule,
    SliderModule,
    VideoModule,
  ],
})
export class RecipeModule {}
