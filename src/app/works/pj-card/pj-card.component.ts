import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pj-card',
  templateUrl: './pj-card.component.html',
  styleUrls: ['./pj-card.component.scss'],
})
export class PjCardComponent {
  @Input() title!: string;
  @Input() tags!: Array<string>;
  @Input() appName!: string;
  // themeColor
  @Input() theme!: string;
  @Input() type?: string = 'done';
}
