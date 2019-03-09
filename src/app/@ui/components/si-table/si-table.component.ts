import { Component, Input, OnInit } from '@angular/core';
import { ITableConfig } from './si-table.models';

@Component({
  selector: 'si-table',
  templateUrl: './si-table.component.html',
  styleUrls: ['./si-table.component.scss']
})
export class SiTableComponent implements OnInit {

  @Input()
  config: ITableConfig;

  @Input()
  data: any[];

  constructor() {}

  ngOnInit() {
  }

}
