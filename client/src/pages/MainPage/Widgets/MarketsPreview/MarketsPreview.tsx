import React, { useState, useEffect, useCallback } from "react";
import { pick } from "lodash";

import styles from "./MarketsPreview.scss";
import Table from "@components/Table";
import { TableProps } from "@components/Table/Table.interface";
import Icon from "@components/Icon";
import { httpService } from "@core/HttpService/HttpService";
import Spinner from "@components/Spinner";
import RadioBar from "@components/RadioBar";
import { useSelector } from "@redux/useSelector";
import { selectedService } from "@pages/MainPage/SelectedService";

const markets = {
  CRYPTO: {
    key: "CRYPTO",
    title: "Cryptocurrencies",
    endpointType: "cryptoMarket",
  },
  TECH: { key: "TECH", title: "Technology", endpointType: "cryptoMarket" },
  HEALTH: { key: "HEALTH", title: "Healthcare", endpointType: "cryptoMarket" },
  MATERIAL: {
    key: "MATERIAL",
    title: "Basic Materials",
    endpointType: "cryptoMarket",
  },
};

const MarketsPreview = () => {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [market, setMarket] = useState(markets.CRYPTO);
  const selected = useSelector((state) => state.selectedItem);

  useEffect(() => {
    setIsLoading(true);
    httpService
      .api({
        type: market.endpointType,
        urlParams: { count: 10, offset: 0 },
        disableBI: true,
      })
      .then((res: any) => {
        setData(
          res?.data.map((item) => pick(item, ["symbol", "price", "changePct"]))
        );

        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [market]);

  const rowStyle = useCallback(
    (idx, value) => ({
      color:
        idx === 0
          ? "var(--fontColor)"
          : idx === 1
          ? "var(--fontSecondaryColor)"
          : parseFloat(value) > 0
          ? "var(--fontProfit)"
          : "var(--fontLoss)",
      fill: parseFloat(value) > 0 ? "var(--fontProfit)" : "var(--fontLoss)",
    }),
    []
  );

  const sort = useCallback(
    (key) => {
      const sortedData = [...data];
      key !== "changePct"
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
      return selected?.symbol === value[0];
    },
    onSelect: (idx) => selectedService.setSelectedItem(data[idx].symbol),
    tableHeaders: [
      {
        key: "symbol",
        label: "Symbol",
        isSortable: true,
        onSort: sort,
      },
      { key: "price", label: "Price", isSortable: true, onSort: sort },
      { key: "changePct", label: "Change", isSortable: true, onSort: sort },
    ],
    tableData: {
      rowStyle,
      data: data.map((row) => Object.values(row)),
      cellIcon: (idx, value) =>
        idx === 2 ? (parseFloat(value) > 0 ? "upArrow" : "downArrow") : null,
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
      <div className={styles.market}>{`Market:   ${market.title}`}</div>
      <RadioBar
        options={Object.keys(markets)}
        selected={market.key}
        onClick={(option) => setMarket(markets[option])}
      />
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

export default MarketsPreview;
