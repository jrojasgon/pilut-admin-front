import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullLayoutComponent} from './layouts/full/full-layout.component';
import {AuthGuardService} from './shared/services/authentication/auth-guard.service';
import {LoginComponent} from './login-register/login/login.component';
import {UserRegisterComponent} from './login-register/user-register/user-register.component';
import {ErrorPageComponent} from './pages/error/error-page.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'userRegister', component: UserRegisterComponent},
  // { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: FULL_ROUTES, canActivate: [AuthGuardService] },

  {
    path: 'competition',
    component: FullLayoutComponent,
    data: {title: 'full Views'},
    loadChildren: () => import('./pages/competition-page/competition-creation-module/competition-creation.module')
      .then(m => m.CompetitionCreationModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'competition',
    component: FullLayoutComponent,
    data: {title: 'full Views'},
    loadChildren: () => import('./pages/competition-page/competition-list-module/competition-list.module')
      .then(m => m.CompetitionListModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'competition',
    component: FullLayoutComponent,
    data: {title: 'full Views'},
    loadChildren: () => import('./pages/competition-page/competition-chart-module/competition-chart.module')
      .then(m => m.CompetitionChartModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'competition',
    component: FullLayoutComponent,
    data: {title: 'full Views'},
    loadChildren: () => import('./pages/administration/load-data-module/load-data.module')
      .then(m => m.LoadDataModule),
    canActivate: [AuthGuardService]
  },
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
