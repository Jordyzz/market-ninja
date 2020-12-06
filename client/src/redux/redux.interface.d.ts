export interface StoreState {
  config: ConfigState;
  selectedItems: SelectedItemsState;
}

export interface StoreAction {
  type: string;
  payload: any;
}

export interface ConfigState {
  theme: string;
  busyCounter: number;
  errorMessages: Array<string>;
}

export type SelectedItemsState = Array<SelectedItem>;

export type SelectedItem = {
  symbol: string;
  price: SymbolPrice;
};

export interface SymbolPrice {
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}
