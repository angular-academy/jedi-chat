import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {ViewProfileComponent} from './view-profile/view-profile.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: ProfileComponent,
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
