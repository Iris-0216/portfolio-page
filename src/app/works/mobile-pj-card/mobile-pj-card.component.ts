import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-pj-card',
  templateUrl: './mobile-pj-card.component.html',
  styleUrls: ['./mobile-pj-card.component.scss'],
})
export class MobilePjCardComponent {
  @Input() title!: string;
  @Input() tags!: Array<string>;
  @Input() appName!: string;
  // themeColor
  @Input() theme!: string;
  @Input() type?: string = 'done';
}
