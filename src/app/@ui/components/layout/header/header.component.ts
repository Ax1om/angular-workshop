import { Component, Input, OnInit } from '@angular/core';
import { IMenuItem } from '@ui/components/layout/header/header.models';

@Component({
  selector: 'si-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() items: IMenuItem[];
  showMenu = false;

  constructor() { }

  ngOnInit() {
  }

}
