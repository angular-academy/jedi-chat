# angular learning group

## session 2: attribute directives

Thema der heutigen Sitzung sind Attribut-Direktiven. Die Session basiert auf der Dokumentation: [https://angular.io/guide/attribute-directives](https://angular.io/guide/attribute-directives)

### Einführung

In angular sind dienen sie der Änderung von Aussehen und Verhalten von DOM-Elementen.

Eine Attribut Direktive wird mit der angular CLI erzeugt (wir beginnen mit einer Highlight-Direktive):

```bash
ng generate directive highlight
````

oder in der Kurzform

```bash
ng g d highlight
````

Die CLI erzeugt daraufhin folgende Dateien:
```bash
CREATE src/app/highlight.directive.spec.ts (236 bytes)
CREATE src/app/highlight.directive.ts (147 bytes)
UPDATE src/app/app.module.ts (477 bytes)
```

Wie bereits bei Komponenten wird die Direktive im declarations-Block des nächsten verfügbaren NgModule registriert.

Tip: Schreibt ihr eine größere Anwendung, ist es sinnvoll oft genutzte Direktiven in ein eigenes NgModule in einem shared/ Verzeichnis bereitzustellen.

### Verwenden einer Attribut-Direktive

Eine Attribut-Direktive wird in HTML Template einer Komponente als Attribut eingehängt:

```html
<p appHighlight>I am a paragraph</p>
```

In der Direktive wieerrum erhält man Zugriff auf das Host-Element über den DI Mechanismus von angular. Typische Abhängigkeiten sind:
* ElementRef des Hosts [https://angular.io/api/core/ElementRef](https://angular.io/api/core/ElementRef)
* ChangeDetector des Hosts [ChangeDetectorRef](ChangeDetectorRef)
* Renderer zum manipulieren von Styles und CSS-Klassen [https://angular.io/api/core/Renderer2](https://angular.io/api/core/Renderer2)
* Animation Builder zum Erstellen von Animationen [https://angular.io/api/animations/AnimationBuilder](https://angular.io/api/animations/AnimationBuilder)
* Router zum Ausführen von Routings [https://angular.io/api/router/Router](https://angular.io/api/router/Router)

Wir beschränken uns zunächst darauf, den Hintergrund der Direktive permanent auf einen Farbwert zu setzen:

```ts
constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2
    ) {
      this.renderer2.setStyle(
        elementRef.nativeElement,
        'background-color',
        'green'
      );
  }
```

### Direktiven-Inputs und Outputs

Direktiven können, wie Komponenten, über @Input und @Output Eingaben entgegen nehmen und Ausgaben generieren.

Ebenso kann ein @Input den gleichen Namen wie die Direktive selber haben, sodass eine Direktiven-Bindung und Wertezuweisung mit einer Anweisung im Template möglich ist:

```typescript
@Input()
public appHighlight: string;
```

oder schöner, mittels @Input-Aliasing (das funktioniert natürlich auch bei Komponenten):
```typescript
@Input('appHighlight')
public highlightColor: string;
```

Änderungen eines Inputs kriegen wir im OnChanges Livecycle Hook mit:

```typescript
this.renderer2.setStyle(
    this.elementRef.nativeElement,
    'background-color',
    this.appHighlight
);
```

### Reagieren auf Benutzer-Interaktionen

Auf Benutzer-Interaktionen kann mittels Event-Listener reagiert werden. Hierzu stellt angular die @HostListener - Annotation bereit.

Als Beispiel erzeugen wir eine Blink-Direktive, die zwischen MouseEnter / MouseLeave Ereignissen die Hintergrundfarbe eines Elements setzt.


### Beispiel: Blink Colors

```typescript
import { Directive, ElementRef, Renderer2,
  Input, OnChanges, OnDestroy, SimpleChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective implements OnChanges, OnDestroy {

  @Input('appBlink')
  public highlightColors: string | string[];

  @HostListener('mouseenter') onMouseEnter() {
    this.cycleColors();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.clearColor();
  }

  private colors: string[];
  private currentColor: number;
  private timerId: number;

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
```

## Beispiel: Direktiven aus dem CDK

Ein aktuelles Beispiel für Direktiven findet ihr im CDK [https://material.angular.io/cdk/categories](https://material.angular.io/cdk/categories)

Beispiel: CDK Drag & Drop
