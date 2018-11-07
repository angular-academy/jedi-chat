import { Directive, ElementRef, Renderer2, OnChanges, SimpleChanges, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  @Input('appHighlight')
  public highlightColor: string;

  constructor(private elementRef: ElementRef,
      private renderer2: Renderer2
    ) {
      /*
      this.renderer2.setStyle(
        elementRef.nativeElement,
        'background-color',
        'green'
      );
      */
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('highlightColor')) {
      this.renderer2.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        this.highlightColor
      );
    }
  }

}
