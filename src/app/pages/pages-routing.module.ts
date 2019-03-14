import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: './home-page/home-page.module#HomePageModule'
      },
      {
        path: 'user-crud',
        loadChildren: './user-crud-page/user-crud-page.module#UserCrudPageModule'
      },
      {
        path: 'static',
        loadChildren: './static/static-pages.module#StaticPagesModule'
      },
      {
        path: '',
        redirectTo: 'home',
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
