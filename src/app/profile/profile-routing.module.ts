import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewProfileComponent} from './view-profile/view-profile.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: SignupComponent,
},
  {
    path: ':nickname',
    pathMatch: 'full',
    component: ViewProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {
}
