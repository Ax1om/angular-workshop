import { NgModule } from '@angular/core';
import { routedComponents, StaticPagesRoutingModule } from './static-pages.routing.module';
import { UiModule } from '@ui/ui.module';

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
