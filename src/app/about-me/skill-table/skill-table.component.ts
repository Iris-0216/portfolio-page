import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-table',
  templateUrl: './skill-table.component.html',
  styleUrls: ['./skill-table.component.scss'],
})
export class SkillTableComponent {
  @Input() title = '';
  @Input() items: string[] = [];
}
