import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptorService} from './interceptors/token-interceptor.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    {
      useClass: TokenInterceptorService,
      provide: HTTP_INTERCEPTORS,
      multi: true
    }
  ]
})
export class AuthModule { }
