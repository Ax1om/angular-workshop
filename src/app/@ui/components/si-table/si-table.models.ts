import { IButtonConfig } from '@ui/components/si-button/si-button.models';

export interface ITableConfig {
  header: ITableHeader[];
  resource: string;
  addButton?: {
    button: IButtonConfig,
    routerLink: any[];
  },
  style?: {
    tableExtendedClass?: string;
    theadClass?: string
  };
  actions?: ITableAction[]
}

export interface ITableHeader {
  fieldName: string;
  columnLabel?: string;
}

export interface ITableAction {
  button: IButtonConfig;
  action: TableActionEnum;
  metadata?: {
    urlParser: (row: any) => any[];
  }

}

export enum TableActionEnum {
  GO_TO='GO_TO', REMOVE='REMOVE'
}
