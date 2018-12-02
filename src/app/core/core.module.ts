import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStoreService } from './user-store.service';

@NgModule({
  exports: [],
  imports: [
    CommonModule
  ],
  providers: [UserStoreService]
})
export class CoreModule { }
