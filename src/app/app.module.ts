import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChatModule} from './chat/chat.module';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { MessageTimerService } from './chat/message-timer.service';

registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
