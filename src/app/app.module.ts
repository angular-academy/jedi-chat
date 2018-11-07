import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BlinkDirective } from './directives/blink.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectiveComponent } from './directives/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BlinkDirective,
    LifecycleComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
