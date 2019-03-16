import { NgModule } from '@angular/core';
import { AuthPagesRoutingModule } from './auth-pages-routing.module';
import { AuthPagesComponent } from './auth-pages.component';
import { UiModule } from '@ui/ui.module';

@NgModule({
  declarations: [AuthPagesComponent],
  imports: [
    AuthPagesRoutingModule,
    UiModule
  ]
})
export class AuthPagesModule { }
