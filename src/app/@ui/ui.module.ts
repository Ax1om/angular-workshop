import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  SiButtonComponent,
  SiTableComponent
} from './components';

const COMPONENTS = [
  SiButtonComponent,
  SiTableComponent
];

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS],
  declarations: [
    ...COMPONENTS
  ],
})
export class UiModule {
}
