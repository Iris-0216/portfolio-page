import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { fader, slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader, slider],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  constructor(public router: Router) {}
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    const cursorElements = document.getElementsByClassName(
      'cursor'
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < cursorElements.length; i++) {
      cursorElements[i].style.left = e.pageX + 'px';
      cursorElements[i].style.top = e.pageY + 'px';
      cursorElements[i].style.zIndex = '1';
    }
    const hoverElements = document.getElementsByClassName(
      'hover-effect'
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < hoverElements.length; i++) {
      hoverElements[i].addEventListener('mouseenter', () => {
        for (let j = 0; j < cursorElements.length; j++) {
          cursorElements[j].classList.add('focus');
        }
      });
      hoverElements[i].addEventListener('mouseleave', () => {
        for (let j = 0; j < cursorElements.length; j++) {
          cursorElements[j].classList.remove('focus');
        }
      });
    }
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && window.innerWidth < 578) {
        // reset cursor position to avoid extra blank
        const cursorElements = document.getElementsByClassName(
          'cursor'
        ) as HTMLCollectionOf<HTMLElement>;
        const left = window.innerWidth * 0.15;
        const top = window.innerHeight * 0.15;
        for (let i = 0; i < cursorElements.length; i++) {
          cursorElements[i].style.left = left + 'px';
          cursorElements[i].style.top = top + 'px';
        }
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
