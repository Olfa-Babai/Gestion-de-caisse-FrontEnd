import { Routes } from '@angular/router';
import { ChoosingpageComponent } from './choosingpage/choosingpage.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'choosing',
    component:ChoosingpageComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },

]
