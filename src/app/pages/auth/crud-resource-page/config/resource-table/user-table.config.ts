import { TableActionEnum } from '@ui/components/si-table/si-table.models';

export const USER_TABLE_CONFIG = {
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