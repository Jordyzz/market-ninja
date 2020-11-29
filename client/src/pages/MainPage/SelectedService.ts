import { dispatch, getState } from "@redux/store";
import { setSelection } from "@redux/selectedItem";
import { httpService } from "@core/HttpService/HttpService";
import {
  ApiResponse,
  SymbolHistoryRes,
} from "@core/HttpService/http.interface";

class SelectedService {
  setSelectedItem(symbol: string) {
    dispatch(setSelection({ symbol }));
  }

  getSelectedItemHistory() {
    const symbol = getState().selectedItem.symbol;

    return httpService
      .api<SymbolHistoryRes>({
        type: "symbolHistory",
        urlParams: { symbol },
      })
      .then((res) => {
        return res;
      });
  }
}

export const selectedService = new SelectedService();
