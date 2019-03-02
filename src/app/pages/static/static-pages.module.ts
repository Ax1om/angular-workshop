import { NgModule } from '@angular/core';
import { UiModule } from '../../@ui/ui.module';
import { routedComponents, StaticPagesRoutingModule } from './static-pages.routing.module';

@NgModule({
  imports: [
    UiModule,
    StaticPagesRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
  ],
})
export class StaticPagesModule {
}
