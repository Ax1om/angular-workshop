import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  SiButtonComponent,
  SiTableComponent,
  SiValidationMessageComponent
} from './components';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsBootstrapUIModule } from '@ng-dynamic-forms/ui-bootstrap';

const COMPONENTS = [
  SiButtonComponent,
  SiTableComponent,
  HeaderComponent,
  SiValidationMessageComponent
];

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  TranslateModule,
  RouterModule,
  DynamicFormsCoreModule,
  DynamicFormsBootstrapUIModule,
];

@NgModule({
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS],
  declarations: [
    ...COMPONENTS
  ],
})
export class UiModule {
}
