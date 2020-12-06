import React from "react";

import styles from "./MainPage.scss";
import { useSelector } from "@redux/useSelector";
import MarketsPreview from "./Widgets/MarketsPreview";
import TransactionsPreview from "./Widgets/TransactionsPreview";
import TrendingTickers from "./Widgets/TrendingTickers";
import TopBar from "@components/TopBar";
import StockPreview from "./Widgets/StockPreview";

function MainPage() {
  const selectedItems = useSelector((state) => state.selectedItems);
  return (
    <div
      className={styles.wrapper}
      style={{
        gridTemplateAreas: `"markets topbar" "markets ${
          selectedItems.find((s) => s.price)
            ? "stockpreview"
            : "trendingtickers"
        }" "transactions trendingtickers"`,
      }}
    >
      <MarketsPreview />
      <TransactionsPreview />
      <TopBar />
      <StockPreview />
      <TrendingTickers />
    </div>
  );
}

export default MainPage;
