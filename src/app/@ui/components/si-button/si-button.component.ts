import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IButtonConfig } from '@ui/components/si-button/si-button.models';

@Component({
  selector: 'si-button',
  templateUrl: './si-button.component.html',
  styleUrls: ['./si-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SiButtonComponent implements OnInit {

  @Input()
  text;

  @Input()
  icon;

  @Input()
  type = 'button';

  @Input()
  classType = 'btn-primary';

  @Input()
  customClasses;

  @Input()
  disabled = false;

  @Input()
  set config(conf: IButtonConfig){
    this.text = conf.text || this.text;
    this.icon = conf.icon || this.icon;
    this.classType = conf.classType || this.classType;
  }

  constructor() { }

  ngOnInit() {
  }

}
