import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { momentImageUrls, smallMomentImageUrls } from 'src/app/works/consts';

@Component({
  selector: 'app-moment-intro',
  templateUrl: './moment-intro.component.html',
  styleUrls: ['./moment-intro.component.scss'],
})
export class MomentIntroComponent {
  constructor(private router: Router) {}
  imageUrls = momentImageUrls;
  smallImageUrls = smallMomentImageUrls;
  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    let delta = 0;
    if (event.deltaY) {
      delta = event.deltaY;
    }

    if (delta > 0) {
      this.router.navigate(['/works/moment/video']);
    }
  }

  onSwipeUp() {
    this.router.navigate(['/works/moment/video']);
  }
}
