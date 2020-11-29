import { apiMap } from "./apiMap";

export interface ApiMap {
  [type: string]: ApiMapItem;
}

export interface ApiMapItem {
  url: string;
  method: "post" | "get" | "put" | "delete";
}

export interface HttpRequestCfg {
  type: keyof typeof apiMap;
  data?: any;
  urlParams?: any;
  disableBI?: boolean;
}

export interface ApiResponse<T> {
  data: Array<T>;
}

export type SymbolHistoryRes = Array<SymbolHistory>;

export interface SymbolHistory {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}
