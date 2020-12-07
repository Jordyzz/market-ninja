import { modalMap } from "@core/ModalService/modalMap";

export interface StoreState {
  config: ConfigState;
  selectedItems: SelectedItemsState;
  user: UserState;
}

export interface StoreAction {
  type: string;
  payload: any;
}

export interface ConfigState {
  theme: string;
  busyCounter: number;
  errorMessages: Array<string>;
  modal: keyof typeof modalMap | null;
}

export interface UserState {
  email: string;
  id: string;
}

export type SelectedItemsState = Array<SelectedItem>;

export type SelectedItem = {
  symbol: string;
};

export interface SymbolPrice {
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}
