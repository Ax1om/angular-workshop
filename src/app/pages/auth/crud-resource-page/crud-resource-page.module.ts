import { NgModule } from '@angular/core';
import { CrudResourcePageRoutingModule, resourcesCrudRoutedComponents } from './crud-resource-page.routing.module';
import { UiModule } from '@ui/ui.module';

@NgModule({
  declarations: [...resourcesCrudRoutedComponents],
  imports: [
    CrudResourcePageRoutingModule,
    UiModule
  ]
})
export class CrudResourcePageModule { }
