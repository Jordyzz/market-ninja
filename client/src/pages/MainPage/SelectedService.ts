import { dispatch, getState } from "@redux/store";
import { toggleSelection, setPriceInfo, clearAll } from "@redux/selectedItem";
import { httpService } from "@core/HttpService/HttpService";
import {
  ApiResponse,
  SymbolHistoryRes,
} from "@core/HttpService/http.interface";
import { SymbolPrice } from "@src/redux/redux.interface";

class SelectedService {
  setSelectedItem(symbol: string) {
    dispatch(toggleSelection(symbol));
  }

  async getSelectedItemHistory(symbol: string) {
    const res = await httpService.api<SymbolHistoryRes>({
      type: "symbolHistory",
      urlParams: { symbol },
    });

    return res;
  }

  updatePriceInfo(symbol: string, price: SymbolPrice) {
    dispatch(setPriceInfo({ symbol, price }));
  }

  clearSelection() {
    dispatch(clearAll());
  }
}

export const selectedService = new SelectedService();
