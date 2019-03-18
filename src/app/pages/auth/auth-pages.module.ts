import { NgModule } from '@angular/core';
import { AuthPagesRoutingModule } from './auth-pages-routing.module';
import { AuthPagesComponent } from './auth-pages.component';
import { UiModule } from '@ui/ui.module';
import { ResourceGuardService } from './crud-resource-page/guards/resource-guard.service';

@NgModule({
  declarations: [AuthPagesComponent],
  imports: [
    AuthPagesRoutingModule,
    UiModule
  ],
  providers: [ResourceGuardService]
})
export class AuthPagesModule { }
