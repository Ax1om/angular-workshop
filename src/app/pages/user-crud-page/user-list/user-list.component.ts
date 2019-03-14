import { Component, OnInit } from '@angular/core';
import { ITableConfig } from '../../../@ui/components/si-table/si-table.models';
import { UserService } from '../../../@core/services/data/user.service';

@Component({
  selector: 'si-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  tableConfig: ITableConfig = {
    header: [
      { fieldName: 'name', columnLabel: 'global.name'},
      { fieldName: 'lastName', columnLabel: 'global.lastName'},
      { fieldName: 'birthday', columnLabel: 'global.birthday'},
    ],
    style: {
      // tableExtendedClass: 'table-striped'
      // tableExtendedClass: 'table-dark'
    }
  };

  tableData$;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.tableData$ = this.userService.get();
  }

}
