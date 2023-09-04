import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeIntroComponent } from './recipe-intro/recipe-intro.component';
import { RecipeVideoComponent } from './recipe-video/recipe-video.component';

const routes: Routes = [
  { path: '', component: RecipeIntroComponent, data: { animation: 'PjIntro' } },
  { path: 'video', component: RecipeVideoComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
