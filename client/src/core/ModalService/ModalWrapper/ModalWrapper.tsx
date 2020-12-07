import React from "react";
import { useSelector } from "@redux/useSelector";

import { modalMap } from "../modalMap";
import styles from "./ModalWrapper.scss";
import { modalService } from "../ModalService";

const ModalWrapper = () => {
  const { modal } = useSelector((state) => state.config);
  const ModalComponent = modalMap[modal]?.component;

  console.log("modal render");
  return (
    <div
      className={styles.wrapper}
      style={{ display: modal ? "flex" : "none" }}
      onClick={() => modalService.closeModal()}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {ModalComponent && <ModalComponent dismiss={modalService.closeModal} />}
      </div>
    </div>
  );
};

export default React.memo(ModalWrapper);
