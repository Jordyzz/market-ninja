import React, { useState, useEffect, useCallback } from "react";

import styles from "./TransactionsPage.scss";
import { useSelector } from "@redux/useSelector";

function TransactionsPage() {
  return <div className={styles.wrapper}>Transaction History</div>;
}

export default TransactionsPage;
