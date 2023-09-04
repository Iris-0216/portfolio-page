import { Component, Input } from '@angular/core';
import { colorCodes } from 'src/app/works/consts';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.scss'],
})
export class ColorBoxComponent {
  @Input() index!: number;
  colorCodes = colorCodes;
}
