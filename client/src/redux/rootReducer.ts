import { combineReducers, Reducer } from "redux";
import * as RI from "./redux.interface";
import configReducer from "./config";
import selectedItemReducer from "./selectedItem";

const rootReducer = combineReducers({
  config: configReducer as Reducer<RI.ConfigState>,
  selectedItem: selectedItemReducer as Reducer<RI.SelectedItemState>,
});

export default rootReducer;
