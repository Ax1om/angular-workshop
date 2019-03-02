import { NgModule } from '@angular/core';
import { UiModule } from '../../@ui/ui.module';
import { HomePageRoutingModule, routedComponents } from './home-page.routing.module';

@NgModule({
  imports: [
    UiModule,
    HomePageRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
  ],
})
export class HomePageModule {
}
