import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-prototype',
  templateUrl: './shop-prototype.component.html',
  styleUrls: ['./shop-prototype.component.scss'],
})
export class ShopPrototypeComponent {
  webPrototypeLink =
    'https://www.figma.com/proto/ax5KGrxaRmfpRv2YAHtSGz/MyShopPrototype?type=design&node-id=296-5640&scaling=contain&page-id=1%3A9792&starting-point-node-id=296%3A5640&show-proto-sidebar=1';
  mobilePrototype =
    'https://www.figma.com/proto/ax5KGrxaRmfpRv2YAHtSGz/MyShopPrototype?type=design&node-id=290-17939&scaling=scale-down&page-id=0%3A1&starting-point-node-id=290%3A18177&show-proto-sidebar=1';
  constructor(private router: Router) {}
  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    let delta = 0;
    if (event.deltaY) {
      delta = event.deltaY;
    }

    if (delta < 0) {
      this.router.navigate(['/works/shop/color']);
    } else {
      this.router.navigate(['/works/shop/video']);
    }
  }

  onSwipeUp() {
    this.router.navigate(['/works/shop/video']);
  }
  onSwipeDown() {
    this.router.navigate(['/works/shop/color']);
  }
}
