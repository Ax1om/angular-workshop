import { NgModule } from '@angular/core';
import { UiModule } from '../../@ui/ui.module';
import { HomePageComponent } from './home-page.component';
import { Routes } from '@angular/router';

@NgModule({
  imports: [
    UiModule
  ],
  declarations: [
    HomePageComponent
  ],
  providers: [
  ],
})
export class HomePageModule {
  static routes: Routes = [
    {
      path: 'home',
      component: HomePageComponent,
      children: [],
    }
  ];
}
