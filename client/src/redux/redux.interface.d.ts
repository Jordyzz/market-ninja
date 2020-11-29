export interface StoreState {
  config: ConfigState;
  selectedItem: SelectedItemState;
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

export interface SelectedItemState {
  symbol: string;
}
