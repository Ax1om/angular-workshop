import { NgModule } from '@angular/core';
import { AuthPagesRoutingModule } from './auth-pages-routing.module';
import { AuthPagesComponent } from './auth-pages.component';

@NgModule({
  declarations: [AuthPagesComponent],
  imports: [
    AuthPagesRoutingModule
  ]
})
export class AuthPagesModule { }
