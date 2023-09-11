import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() desktop: string = '';
  @Input() mobile: string = '';
  @Input() title: string = '';
  @Input() footer?: boolean;
  @Input() text?: string;

  visibility: number = 0;
  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.checkVisibility();
    addEventListener('scroll', (e) => {
      this.checkVisibility();
    });
  }

  checkVisibility() {
    const { top, bottom, height } =
      this.element.nativeElement.getBoundingClientRect();

    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    let a = Math.floor(100 - ((top >= 0 ? 0 : top) / +-height) * 100);
    let b = Math.floor(100 - ((bottom - windowHeight) / height) * 100);
    let percentage = a < 100 && a >= 0 ? a : b < 100 && b >= 0 ? b : 0;
    if (a === 100 && b === 100) percentage = 100;
    this.visibility = percentage / 100;
  }
}
