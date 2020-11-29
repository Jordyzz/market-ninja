import React from "react";

import styles from "./Table.scss";
import { TableProps } from "./Table.interface";
import Icon from "@components/Icon";

const Table = ({
  tableHeaders,
  tableData,
  onSelect,
  isSelectable,
  isSelected,
  rowAction,
}: TableProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <div
          className={styles.thead}
          style={{
            marginLeft: isSelectable ? "20px" : "0",
            marginRight: rowAction ? "30px" : "0",
          }}
        >
          {tableHeaders.map((header) => (
            <div
              key={header.label}
              className={styles.headers}
              style={{
                width: `calc(100% / ${tableHeaders.length})`,
                cursor: header.isSortable ? "pointer" : "unset",
              }}
              onClick={() => header.onSort(header.key)}
            >
              {header.isSortable && <Icon type={"sort"} />}
              {header.label}
            </div>
          ))}
        </div>
        <div className={styles.columnsContainer}>
          <div className={styles.columns}>
            {tableData.data.map((row, idx) => (
              <div
                key={idx}
                onClick={() => onSelect(idx)}
                className={styles.row}
                style={{ cursor: isSelectable ? "pointer" : "unset" }}
              >
                {isSelectable && (
                  <Icon
                    type={isSelected(row) ? "checked" : "circle"}
                    className={styles.selectIcon}
                  />
                )}
                {row.map((col, dataIdx) => (
                  <div
                    key={`${col}-${dataIdx}`}
                    className={styles.cell}
                    style={{
                      width: `calc(100% / ${row.length})`,
                      ...tableData.rowStyle(dataIdx, col),
                    }}
                  >
                    <Icon
                      type={tableData.cellIcon(dataIdx, col)}
                      className={styles.genericIcon}
                    />
                    {col}
                  </div>
                ))}
                {rowAction(idx, row)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
