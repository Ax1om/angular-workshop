import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AuthGuard } from './pages.guards';
import { AccountResolver } from './pages.resolvers';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  exports: [
  ],
  providers: [
    AuthGuard,
    AccountResolver
  ]
})
export class PagesModule {
}
