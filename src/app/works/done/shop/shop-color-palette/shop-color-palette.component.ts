import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-color-palette',
  templateUrl: './shop-color-palette.component.html',
  styleUrls: ['./shop-color-palette.component.scss'],
})
export class ShopColorPaletteComponent {
  constructor(private router: Router) {}
  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    let delta = 0;
    if (event.deltaY) {
      delta = event.deltaY;
    }

    if (delta < 0) {
      this.router.navigate(['/works/shop']);
    } else {
      this.router.navigate(['/works/shop/prototype']);
    }
  }

  onSwipeUp() {
    this.router.navigate(['/works/shop/prototype']);
  }
  onSwipeDown() {
    this.router.navigate(['/works/shop']);
  }
}
