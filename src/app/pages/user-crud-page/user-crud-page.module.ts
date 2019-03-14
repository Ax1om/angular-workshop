import { NgModule } from '@angular/core';
import { UserCrudPageRoutingModule, userCrudRoutedComponents } from './user-crud-page-routing.module';
import { UiModule } from '../../@ui/ui.module';

@NgModule({
  imports: [
    UiModule,
    UserCrudPageRoutingModule
  ],
  declarations: [
    ...userCrudRoutedComponents
  ]
})
export class UserCrudPageModule {
}
