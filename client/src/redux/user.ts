import { StoreAction, UserState } from "./redux.interface";

export const setUser = (payload): StoreAction => ({
  type: "user/SET_USER",
  payload,
});

export const clearUser = () => ({
  type: "user/CLEAR_USER",
});

const initialState: UserState = null;

export default function userReducer(
  state: UserState = initialState,
  action: StoreAction
) {
  switch (action.type) {
    case "user/SET_USER":
      return action.payload;
    case "user/CLEAR_USER":
      return null;
    default:
      return state;
  }
}
