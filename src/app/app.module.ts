import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// New Imports
import {LOCALE_ID} from '@angular/core';
import {CurrencyPipe, registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { InitialsPipe } from './initials.pipe';
import {HttpClientModule} from '@angular/common/http';
import {LoggerService} from './logger.service';

// Register locale data for german language
registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    InitialsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
    CurrencyPipe,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
