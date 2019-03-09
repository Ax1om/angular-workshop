export interface ITableConfig {
  header: ITableHeader[];
  style?: {
    tableExtendedClass?: string;
    theadClass?: string
  };
}

export interface ITableHeader {
  fieldName: string;
  columnLabel?: string;
}