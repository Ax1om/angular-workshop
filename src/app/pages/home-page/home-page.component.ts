import { Component, OnInit } from '@angular/core';
import { ITableConfig } from '../../@ui/components/si-table/si-table.models';

@Component({
  selector: 'si-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  tableConfig: ITableConfig = {
    header: [
      { fieldName: 'name', columnLabel: 'Name'},
      { fieldName: 'lastName', columnLabel: 'Surname'},
      { fieldName: 'age', columnLabel: 'Age'},
    ],
    style: {
      // tableExtendedClass: 'table-striped'
      tableExtendedClass: 'table-dark'
    }
  };

  tableData = [
    { name: 'Mario', lastName: 'Rossi', age: 29 },
    { name: 'Carlo', lastName: 'Magno', age: 23 },
    { name: 'Davide', lastName: 'Rota', age: 25 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
