import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-intro',
  templateUrl: './shop-intro.component.html',
  styleUrls: ['./shop-intro.component.scss'],
})
export class ShopIntroComponent {
  constructor(private router: Router) {}
  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    let delta = 0;
    if (event.deltaY) {
      delta = event.deltaY;
    }

    if (delta > 0) {
      this.router.navigate(['/works/shop/color']);
    }
  }
  onSwipeUp() {
    this.router.navigate(['/works/shop/color']);
  }
}
