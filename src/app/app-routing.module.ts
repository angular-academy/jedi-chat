import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [{
  path: 'chat',
  loadChildren: './chat/chat.module#ChatModule',
  data: {locations: [{text: 'Chat', path: '/chat'}, {text: 'Profile', path: '/profile'}]},
}, {
  path: 'profile',
  loadChildren: './profile/profile.module#ProfileModule',
  data: {locations: [{text: 'Chat', path: '/chat'}, {text: 'Profile', path: '/profile'}]},
}, {
  path: 'login',
  pathMatch: 'full',
  component: LoginComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: '/chat',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
