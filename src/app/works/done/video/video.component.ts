import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit, OnDestroy {
  @ViewChild('video', { static: true }) videoEle!: ElementRef;
  @ViewChild('playButton', { static: true }) playButton!: ElementRef;
  @Input() appName!: string;
  videoEnded: any;

  ngOnInit(): void {
    this.videoEnded = this.renderer2.listen(
      this.videoEle.nativeElement,
      'ended',
      (evt) => {
        // reset
        this.videoEle.nativeElement.currentTime = 0;
        this.playButton.nativeElement.classList.remove('hide');
      }
    );
  }
  constructor(private renderer2: Renderer2) {}

  ngOnDestroy(): void {
    this.videoEnded();
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
