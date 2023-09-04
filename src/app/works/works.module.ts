import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from './works.component';
import { DoneComponent } from './done/done.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { PjCardComponent } from './pj-card/pj-card.component';
import { WorksRoutingModule } from './works-routing.module';
import { NavButtonModule } from './nav-button/nav-button.module';
import { MobilePjCardComponent } from './mobile-pj-card/mobile-pj-card.component';

@NgModule({
  declarations: [
    WorksComponent,
    DoneComponent,
    InProgressComponent,
    PjCardComponent,
    MobilePjCardComponent,
  ],
  imports: [CommonModule, WorksRoutingModule, NavButtonModule],
})
export class WorksModule {}
