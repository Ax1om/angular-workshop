import { TableActionEnum } from '@ui/components/si-table/si-table.models';

export const SKILLS_TABLE_CONFIG = {
  resource: 'skills',
  addButton: {
    button: {
      icon: 'fa-plus',
      text: 'global.add'
    },
    routerLink: ['new']
  },
  header: [
    { fieldName: 'name', columnLabel: 'global.name'},
    { fieldName: 'category', columnLabel: 'global.category'},
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