import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

const SERVICES = [
  
];

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ServicesModule {
}
