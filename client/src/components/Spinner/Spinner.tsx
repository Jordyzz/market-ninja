import React from "react";
import classNames from "classnames";

import styles from "./Spinner.scss";
import { SpinnerProps } from "./Spinner.interface";

const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.skFoldingCube}>
        <div className={classNames(styles.skCube1, styles.skCube)}></div>
        <div className={classNames(styles.skCube2, styles.skCube)}></div>
        <div className={classNames(styles.skCube4, styles.skCube)}></div>
        <div className={classNames(styles.skCube3, styles.skCube)}></div>
      </div>
    </div>
  );
};

export default React.memo(Spinner);
