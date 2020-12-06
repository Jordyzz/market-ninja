import { StoreAction, SelectedItemsState } from "./redux.interface";

export const toggleSelection = (payload): StoreAction => ({
  type: "selected/TOGGLE_SELECTION",
  payload,
});

export const setPriceInfo = (payload): StoreAction => ({
  type: "selected/SET_PRICE",
  payload,
});

export const clearAll = () => ({
  type: "selected/CLEAR_SELECTION",
});

const initialState: SelectedItemsState = [];

export default function selectedItemReducer(
  state: SelectedItemsState = initialState,
  action: StoreAction
) {
  switch (action.type) {
    case "selected/TOGGLE_SELECTION":
      return state.find((i) => i.symbol === action.payload)
        ? state.filter((i) => i.symbol !== action.payload)
        : [...state, { symbol: action.payload }];
    case "selected/SET_PRICE":
      const item = state.find((i) => i.symbol === action.payload.symbol);
      item.price = action.payload.price;
      return [...state];
    case "selected/CLEAR_SELECTION":
      return initialState;
    default:
      return state;
  }
}
