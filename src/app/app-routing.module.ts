import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LifecycleComponent} from './lifecycle/lifecycle.component';
import {DirectiveComponent} from './directives/directive.component';

const routes: Routes = [
    {path: 'lifecycle', component: LifecycleComponent},
    {path: 'directive', component: DirectiveComponent},
    {path: '**', redirectTo: 'directive'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
