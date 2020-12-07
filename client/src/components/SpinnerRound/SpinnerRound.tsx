import React from "react";

import styles from "./SpinnerRound.scss";

const SpinnerRound = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.dot1}></div>
      <div className={styles.dot2}></div>
    </div>
  );
};

export default React.memo(SpinnerRound);
