import React, { useState, useCallback, useEffect } from "react";

import styles from "./TrendingTickers.scss";
import Spinner from "@components/Spinner";
import Table from "@components/Table";
import Icon from "@components/Icon";
import { TableProps } from "@components/Table/Table.interface";
import { httpService } from "@core/HttpService/HttpService";
import { useSelector } from "@redux/useSelector";
import { selectedService } from "@pages/MainPage/SelectedService";

const TrendingTickers = () => {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const selectedItems = useSelector((state) => state.selectedItems);

  useEffect(() => {
    setIsLoading(true);
    httpService
      .api({
        type: "trendingTickers",
        disableBI: true,
      })
      .then((res: any) => {
        setData(res);

        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const rowStyle = useCallback(
    (idx, value) => ({
      color:
        idx === 0
          ? "var(--fontColor)"
          : idx === 4 || idx === 5
          ? parseFloat(value) > 0
            ? "var(--fontProfit)"
            : "var(--fontLoss)"
          : "var(--fontSecondaryColor)",
      fill: parseFloat(value) > 0 ? "var(--fontProfit)" : "var(--fontLoss)",
    }),
    []
  );

  const sort = useCallback(
    (key) => {
      const sortedData = [...data];
      ![
        "lastPrice",
        "change",
        "changePct",
        "volume",
        "avgVolume",
        "marketCap",
      ].includes(key)
        ? sortedData.sort((a, b) => {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
          })
        : sortedData.sort((a, b) => {
            if (parseFloat(a[key]) > parseFloat(b[key])) return -1;
            if (parseFloat(a[key]) < parseFloat(b[key])) return 1;
            return 0;
          });

      setData(sortedData);
    },
    [data, setData]
  );

  const tableCfg: TableProps = {
    isSelectable: true,
    isSelected: (value) => {
      return !!selectedItems.find((item) => item.symbol === value[0]);
    },
    onSelect: (idx) => selectedService.setSelectedItem(data[idx].symbol),
    tableHeaders: [
      {
        key: "symbol",
        label: "Symbol",
        isSortable: true,
        onSort: sort,
      },
      { key: "name", label: "Name", isSortable: true, onSort: sort },
      { key: "lastPrice", label: "Last Price", isSortable: true, onSort: sort },
      {
        key: "marketTime",
        label: "Market Time",
        isSortable: true,
        onSort: sort,
      },
      { key: "change", label: "Change", isSortable: true, onSort: sort },
      { key: "changePct", label: "Change %", isSortable: true, onSort: sort },
      { key: "volume", label: "Volume", isSortable: true, onSort: sort },
      {
        key: "avgVolume",
        label: "Avg. Volume",
        isSortable: true,
        onSort: sort,
      },
      { key: "marketCap", label: "MarketCap", isSortable: true, onSort: sort },
    ],
    tableData: {
      rowStyle,
      data: data.map((row) => Object.values(row)),
      cellIcon: (idx, value) =>
        idx === 4 || idx === 5
          ? parseFloat(value) > 0
            ? "upArrow"
            : "downArrow"
          : null,
    },
    rowAction: (idx, value) => (
      <Icon
        type="favorites"
        style={{
          fill: favorites.includes(value[0])
            ? "orange"
            : "var(--fontSecondaryColor",
          marginLeft: "10px",
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (favorites.includes(value[0])) {
            setFavorites((prev) => prev.filter((c) => c !== value[0]));
          } else {
            setFavorites((prev) => [...prev, value[0]]);
          }
        }}
      />
    ),
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.market}>Trending Tickers</div>

      {isLoading ? (
        <Spinner className={styles.spinner} />
      ) : (
        <div className={styles.tableContainer}>
          <Table {...tableCfg} />
        </div>
      )}
    </div>
  );
};

export default TrendingTickers;
