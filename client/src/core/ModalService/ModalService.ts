import { setModalType } from "@src/redux/config";
import { dispatch } from "@src/redux/store";
import { modalMap } from "./modalMap";

class ModalService {
  openModal(type: keyof typeof modalMap) {
    dispatch(setModalType(type));
  }

  closeModal() {
    dispatch(setModalType(null));
  }
}

export const modalService = new ModalService();
