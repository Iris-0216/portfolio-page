import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-video',
  templateUrl: './shop-video.component.html',
  styleUrls: ['./shop-video.component.scss'],
})
export class ShopVideoComponent {
  type: string = 'web';
  constructor(private router: Router) {}
  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    let delta = 0;
    if (event.deltaY) {
      delta = event.deltaY;
    }

    if (delta < 0) {
      this.router.navigate(['/works/shop/prototype']);
    }
  }

  onSwipeDown() {
    this.router.navigate(['/works/shop/prototype']);
  }

  switchType() {
    if (this.type === 'web') {
      this.type = 'mobile';
    } else {
      this.type = 'web';
    }
  }
}
