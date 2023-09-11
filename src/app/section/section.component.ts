import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() src: string = '';
  @Input() title: string = '';
  @Input() footer?: boolean;
  @Input() text?: string;

  visibility: number = 0;
  constructor(private element: ElementRef) {}

  ngOnInit() {
    addEventListener('scroll', (e) => {
      this.checkVisibility();
      console.log(this.visibility);
    });
  }

  checkVisibility() {
    const rect = this.element.nativeElement.getBoundingClientRect();

    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    let a = Math.floor(
      100 - ((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100
    );
    let b = Math.floor(
      100 - ((rect.bottom - windowHeight) / rect.height) * 100
    );

    let percentage = a < 100 && a >= 0 ? a : b < 100 && b >= 0 ? b : 0;
    if (a === 100 && b === 100) percentage = 100;
    this.visibility = percentage / 100;
  }
}
