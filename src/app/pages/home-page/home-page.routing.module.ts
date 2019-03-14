import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [],
  }
];

export const routedComponents = [
    HomePageComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: []
})
export class HomePageRoutingModule {}
