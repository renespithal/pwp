import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingComponent } from './common/components/routing.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RoutingComponent
  },{
    path: 'profile',
    loadChildren: './features/profile/profile.module#ProfileModule'
  },{
    path: 'match',
    loadChildren: './features/matching/matching.module#MatchingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
