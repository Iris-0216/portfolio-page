import { Component } from '@angular/core';
import { trackerTags } from '../consts';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss'],
})
export class InProgressComponent {
  trackerTags = trackerTags;
}
