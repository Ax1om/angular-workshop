import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { keys } from 'lodash';

@Component({
  selector: 'si-validation-message',
  templateUrl: './si-validation-message.component.html',
  styleUrls: ['./si-validation-message.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SiValidationMessageComponent implements OnInit {

  @Input() control: FormControl;
  @Input() controlModel;

  constructor() { }

  ngOnInit() {
  }

  get errors() {
    if (!this.control) {
      return [];
    }
    return keys(this.control.errors);
  }

}
