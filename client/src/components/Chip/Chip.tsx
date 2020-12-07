import React from "react";

import styles from "./Chip.scss";
import { ChipProps } from "./Chip.interface";
import Icon from "@components/Icon";

const Chip = ({ label, onDelete }: ChipProps) => {
  return (
    <div className={styles.chip}>
      {onDelete && (
        <Icon
          type="close"
          onClick={() => onDelete(label)}
          style={{ cursor: "pointer" }}
        />
      )}
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default React.memo(Chip);
