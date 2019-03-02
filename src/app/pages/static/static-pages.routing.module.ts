import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './not-found/not-found-page.component';


const routes: Routes = [
  {
    path: '404',
    component: NotFoundPageComponent,
  }
];

export const routedComponents = [
  NotFoundPageComponent,
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StaticPagesRoutingModule {}
