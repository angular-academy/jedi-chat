import { Directive, ElementRef, Renderer2,
  Input, OnChanges, OnDestroy, SimpleChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective implements OnChanges, OnDestroy {

  @Input('appBlink')
  public highlightColors: string | string[];

  private colors: string[];
  private currentColor: number;
  private timerId: number;

  @HostListener('mouseenter') onMouseEnter() {
    this.cycleColors();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.clearColor();
  }

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('highlightColors')) {
      if ( typeof this.highlightColors === 'string'  ) {
        this.colors = this.highlightColors.split(',').map(x => x.trim());
        this.currentColor = 0;
      } else if (this.highlightColors instanceof Array) {
        this.colors = this.highlightColors;
        this.currentColor = 0;
      }
    }
  }

  public ngOnDestroy(): void {
    if (this.timerId) {
      window.clearTimeout(this.timerId);
      this.timerId = undefined;
    }
  }

  private cycleColors(): void {
    if (this.colors && this.colors.length > 0) {
      this.renderer2.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        this.colors[ this.currentColor]
      );

      this.currentColor = (this.currentColor + 1) % this.colors.length;
    }
    this.timerId = window.setTimeout(() => this.cycleColors(), 1000);
  }

  private clearColor(): void {
    if (this.timerId !== undefined) {
      window.clearTimeout(this.timerId);
      this.timerId = undefined;
    }
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'initial'
    );
  }
}
