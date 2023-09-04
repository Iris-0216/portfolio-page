import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-video',
  templateUrl: './recipe-video.component.html',
  styleUrls: ['./recipe-video.component.scss'],
})
export class RecipeVideoComponent implements OnInit {
  @ViewChild('video', { static: true }) videoEle!: ElementRef;
  @ViewChild('playButton', { static: true }) playButton!: ElementRef;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    let delta = 0;
    if (event.deltaY) {
      delta = event.deltaY;
    }

    if (delta < 0) {
      this.router.navigate(['/works/recipe']);
    }
  }

  onSwipeDown() {
    this.router.navigate(['/works/recipe']);
  }

  onBtnClick(e: any) {
    if (this.videoEle.nativeElement.paused) {
      this.videoEle.nativeElement.play();
      e.target.classList.add('hide');
    }
  }

  onVideoClick(e: any) {
    if (!e.target.paused) {
      this.videoEle.nativeElement.pause();
      this.playButton.nativeElement.classList.remove('hide');
    }
  }
}
