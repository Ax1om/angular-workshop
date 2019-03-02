import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { UiModule } from '../@ui/ui.module';
import { PagesComponent } from './pages.component';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    UiModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
