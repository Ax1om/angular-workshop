import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPagesComponent } from './auth-pages.component';
import { ResourceGuardService } from './crud-resource-page/guards/resource-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AuthPagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: './home-page/home-page.module#HomePageModule'
      },
      {
        path: 'crud/:resource',
        loadChildren: './crud-resource-page/crud-resource-page.module#CrudResourcePageModule',
        canActivate: [ResourceGuardService]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPagesRoutingModule {
}
