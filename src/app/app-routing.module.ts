import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanActivateGuard} from './core/can-activate.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path: 'dash',
    loadChildren: () => import('./dash/dash.module').then(mod => mod.DashModule),
  },
  {
    path: 'admin-layout',
    canActivate: [CanActivateGuard],
    data: { admin: true },
    loadChildren: () => import('./admin-layout/admin-layout.module').then(mod => mod.AdminLayoutModule),
  },
  {
    path: '**',
    redirectTo: '/auth/signin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
