import { combineReducers, Reducer } from "redux";
import * as RI from "./redux.interface";
import configReducer from "./config";
import selectedItemReducer from "./selectedItem";

const rootReducer = combineReducers({
  config: configReducer as Reducer<RI.ConfigState>,
  selectedItems: selectedItemReducer as Reducer<RI.SelectedItemsState>,
});

export default rootReducer;
