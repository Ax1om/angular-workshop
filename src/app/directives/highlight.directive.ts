import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[siHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() siHighlight = 'yellow';
  @Input() textColor = 'black';
  constructor(private elRef: ElementRef) {}

  @HostListener('mouseover') onmouseover() {
    this.elRef.nativeElement.style.color = this.siHighlight;
    this.elRef.nativeElement.style.backgroundColor = this.textColor;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.elRef.nativeElement.style.color = this.textColor;
    this.elRef.nativeElement.style.backgroundColor = this.siHighlight;
  }
}
