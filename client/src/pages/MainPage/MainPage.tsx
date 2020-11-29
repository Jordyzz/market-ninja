import React, { useState, useEffect, useCallback } from "react";

import styles from "./MainPage.scss";
import { useSelector } from "@redux/useSelector";
import MarketsPreview from "./Widgets/MarketsPreview";
import TransactionsPreview from "./Widgets/TransactionsPreview";
import TrendingTickers from "./Widgets/TrendingTickers";
import TopBar from "@components/TopBar";
import StockPreview from "./Widgets/StockPreview";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <MarketsPreview />
      <TopBar />
      <TransactionsPreview />
      <StockPreview />
      <TrendingTickers />
    </div>
  );
}

export default MainPage;
