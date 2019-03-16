import { Component, OnInit } from '@angular/core';
import { ITableConfig, TableActionEnum } from '@ui/components/si-table/si-table.models';
import { UserService } from '@core/services/data/user.service';

@Component({
  selector: 'si-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  tableConfig: ITableConfig = {
    resource: 'users',
    addButton: {
      button: {
        icon: 'fa-plus',
        text: 'global.add'
      },
      routerLink: ['new']
    },
    header: [
      { fieldName: 'name', columnLabel: 'global.name'},
      { fieldName: 'lastName', columnLabel: 'global.lastName'},
      { fieldName: 'birthday', columnLabel: 'global.birthday'},
    ],
    style: {
      tableExtendedClass: 'table-striped'
      // tableExtendedClass: 'table-dark'
    },
    actions: [
      {
        button: {
          icon: 'fa-edit'
        },
        action: TableActionEnum.GO_TO,
        metadata: {
          urlParser: row => ['edit', row.id]
        }
      },
      {
        button: {
          icon: 'fa-remove'
        },
        action: TableActionEnum.REMOVE
      }
    ]
  };

  tableData$;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.tableData$ = this.userService.get();
  }

}
