import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MomentIntroComponent } from './moment-intro/moment-intro.component';
import { MomentVideoComponent } from './moment-video/moment-video.component';

const routes: Routes = [
  { path: '', component: MomentIntroComponent },
  { path: 'video', component: MomentVideoComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomentRoutingModule {}
