import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './not-found/not-found-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForbiddenPageComponent } from './forbidden-page/forbidden-page.component';


const routes: Routes = [
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'forbidden',
    component: ForbiddenPageComponent
  }
];

export const routedComponents = [
  NotFoundPageComponent,
  LoginPageComponent,
  ForbiddenPageComponent
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StaticPagesRoutingModule {}
