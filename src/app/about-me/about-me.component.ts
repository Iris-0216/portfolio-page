import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TableData, tableData } from './consts';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  tables: TableData[] = tableData;
  @ViewChildren('page') pages!: QueryList<ElementRef>;

  idlePeriod = 100;
  animationDuration = 1000;
  lastAnimation = 0;
  index = 0;

  togglePage(index: number, state: string) {
    if (state === 'show') {
      this.pages.toArray()[index].nativeElement.classList.add('show');
    } else {
      this.pages.toArray()[index].nativeElement.classList.remove('show');
    }
  }

  ngAfterViewInit() {
    this.togglePage(0, 'show');
  }

  goPrev() {
    if (this.index < 1) return;
    this.togglePage(this.index, 'hide');
    this.index--;
    this.pages.forEach((page, i) => {
      if (i === this.index) {
        this.togglePage(i, 'show');
        page.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  goNext() {
    if (this.index > 1) return;
    this.togglePage(this.index, 'hide');
    this.index++;
    this.pages.forEach((page, i) => {
      if (i === this.index) {
        this.togglePage(i, 'show');
        page.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    let delta = 0;
    if (event.deltaY) {
      delta = event.deltaY;
    }
    const timeNow = new Date().getTime();

    if (
      timeNow - this.lastAnimation <
      this.idlePeriod + this.animationDuration
    ) {
      event.preventDefault();
      return;
    }

    if (delta > 0) {
      this.goNext();
    } else {
      this.goPrev();
    }

    this.lastAnimation = timeNow;
  }
}
