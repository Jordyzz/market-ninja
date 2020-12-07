import { dispatch } from "@redux/store";
import { toggleSelection, clearAll } from "@redux/selectedItem";
import { httpService } from "@core/HttpService/HttpService";
import { SymbolHistoryRes } from "@core/HttpService/http.interface";

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

  clearSelection() {
    dispatch(clearAll());
  }
}

export const selectedService = new SelectedService();
