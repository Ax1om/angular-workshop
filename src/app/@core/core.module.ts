import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ServicesModule } from './services/services.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    ServicesModule
  ],
  exports: [ServicesModule],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
