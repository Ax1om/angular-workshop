import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  SiButtonComponent,
  SiTableComponent
} from './components';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  SiButtonComponent,
  SiTableComponent,
  HeaderComponent
];

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, RouterModule];

@NgModule({
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS],
  declarations: [
    ...COMPONENTS
  ],
})
export class UiModule {
}
