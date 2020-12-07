import { modalMap } from "./modalMap";

export interface ModalMap {
  [type: string]: ModalMapItem;
}

export interface ModalMapItem {
  type: keyof typeof modalMap;

  /* A react component */
  component: any;
}
