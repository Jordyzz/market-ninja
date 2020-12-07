import { ModalMap } from "./modal.interface";
import LoginModal from "./modals/LoginModal";
import RegisterModal from "./modals/RegisterModal";

export const modalMap: ModalMap = {
  login: {
    type: "login",
    component: LoginModal,
  },
  register: {
    type: "register",
    component: RegisterModal,
  },
};
