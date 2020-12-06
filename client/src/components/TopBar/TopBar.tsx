import React from "react";

import { selectedService } from "@pages/MainPage/SelectedService";
import styles from "./TopBar.scss";
import { useSelector } from "@redux/useSelector";
import Bullet from "@components/Bullet";
import { capitalizeLabel } from "@src/utils";
import Icon from "@components/Icon";

const TopBar = () => {
  const selectedItems = useSelector((state) => state.selectedItems);

  return (
    <div className={styles.wrapper}>
      {selectedItems.length > 0 && selectedItems[0].price && (
        <div className={styles.symbolContainer}>
          <div className={styles.symbolData}>
            <Icon
              type="close"
              onClick={() => selectedService.clearSelection()}
              style={{ cursor: "pointer" }}
            />
            <span className={styles.symbol}>{selectedItems[0].symbol}</span>
          </div>
          {Object.entries(selectedItems[0].price).map((entry) => (
            <div key={entry[0]} className={styles.container}>
              <Bullet />
              <div className={styles.details}>
                <span className={styles.value}>{entry[1]}</span>
                <span className={styles.label}>
                  {capitalizeLabel(entry[0])}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(TopBar);
