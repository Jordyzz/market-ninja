import { StoreAction, SelectedItemState } from "./redux.interface";

export const setSelection = (payload): StoreAction => ({
  type: "selected/SET_SELECTION",
  payload,
});

const initialState: SelectedItemState = { symbol: null };

export default function selectedItemReducer(
  state: SelectedItemState = initialState,
  action: StoreAction
) {
  switch (action.type) {
    case "selected/SET_SELECTION":
      return action.payload;
    default:
      return state;
  }
}
