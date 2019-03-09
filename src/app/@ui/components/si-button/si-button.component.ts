import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
