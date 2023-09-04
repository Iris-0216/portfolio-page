import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { AboutMeComponent } from './about-me.component';
import { SkillTableComponent } from './skill-table/skill-table.component';

@NgModule({
  declarations: [AboutMeComponent, BarChartComponent, SkillTableComponent],
  imports: [CommonModule],
})
export class AboutMeModule {}
