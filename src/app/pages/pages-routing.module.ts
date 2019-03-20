import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AuthGuard } from './pages.guards';
import { AccountResolver } from './pages.resolvers';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './auth/auth-pages.module#AuthPagesModule',
        canActivate: [AuthGuard],
        resolve: {
          user: AccountResolver
        }
      },
      {
        path: 'static',
        loadChildren: './static/static-pages.module#StaticPagesModule'
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'static/404'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class PagesRoutingModule {
}
