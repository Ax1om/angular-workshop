import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StaticPagesModule } from './static/static-pages.module';
import { HomePageModule } from './home-page/home-page.module';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      ...HomePageModule.routes,
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ]
  }
];

const PAGES_MODULES = [
  StaticPagesModule,
  HomePageModule
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ...PAGES_MODULES
  ],
  exports: [RouterModule],
  providers: [
  ]
})
export class PagesRoutingModule {
}
