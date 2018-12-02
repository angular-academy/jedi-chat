import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'chat',
  loadChildren: './chat/chat.module#ChatModule',
  data: { locations: [{ text: 'Chat', path: '/chat' }, { text: 'Profile', path: '/profile' }] },
}, {
  path: 'profile',
  loadChildren: './profile/profile.module#ProfileModule',
  data: { locations: [{ text: 'Chat', path: '/chat' }, { text: 'Profile', path: '/profile' }] },
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
