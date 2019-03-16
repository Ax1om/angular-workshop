import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SiLoaderInterceptor } from './si-loader.interceptor';
import { SiLoaderService } from './si-loader.service';
import { SiLoaderComponent } from './loader/si-loader.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ SiLoaderComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    SiLoaderComponent
  ],
  providers: [
    SiLoaderService,
    {provide: HTTP_INTERCEPTORS, useClass: SiLoaderInterceptor, multi: true}
  ]
})
export class SiLoaderModule {}
