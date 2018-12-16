import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStoreService } from './user-store.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  exports: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [UserStoreService]
})
export class CoreModule { }
