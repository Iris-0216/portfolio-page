import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moment-video',
  templateUrl: './moment-video.component.html',
  styleUrls: ['./moment-video.component.scss'],
})
export class MomentVideoComponent {
  constructor(private router: Router) {}
  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    let delta = 0;
    if (event.deltaY) {
      delta = event.deltaY;
    }

    if (delta < 0) {
      this.router.navigate(['/works/moment']);
    }
  }

  onSwipeDown() {
    this.router.navigate(['/works/moment']);
  }
}
