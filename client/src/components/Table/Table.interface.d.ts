import iconsMap from "@components/Icon/iconsMap";

export interface TableProps {
  tableHeaders: Array<TableHeaderCfg>;
  tableData: TableData;
  isSelectable?: boolean;
  onSelect?: (idx: number) => void;
  isSelected?: (value: any[]) => boolean;
  rowAction?: (idx: number, value: any) => JSX.Element;
}

export interface TableHeaderCfg {
  key: string;
  label: string;
  isSortable?: boolean;
  onSort?: (key: string) => void;
}

export interface TableData {
  data: Array<Array<any>>;
  rowStyle: (index: number, value: any) => any;
  cellIcon?: (index: number, value: any) => keyof typeof iconsMap | null;
}
