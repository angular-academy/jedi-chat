import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [ViewProfileComponent, SignupComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ProfileModule { }
