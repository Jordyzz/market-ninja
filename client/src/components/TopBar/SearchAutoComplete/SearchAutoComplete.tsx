import React, { useEffect, useState } from "react";

import Icon from "@components/Icon";
import SpinnerRound from "@components/SpinnerRound";
import { SearchACProps } from "./SearchAutoComplete.interface";
import styles from "./SearchAutoComplete.scss";

let timeoutHandler;

const SearchAutoComplete = ({ fetchOptions, onOptionClick }: SearchACProps) => {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (!input) return;
    clearTimeout(timeoutHandler);
    timeoutHandler = setTimeout(() => handleFetchOptions(input), 400);

    return () => clearTimeout(timeoutHandler);
  }, [input]);

  const handleFetchOptions = (input: string) => {
    setLoading(true);
    fetchOptions(input).then((res) => {
      setOptions(res);
      setLoading(false);
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchInput}>
        <Icon type="search" />
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search..."
          value={input}
          onFocus={() => setFocus(true)}
          onBlur={() => setTimeout(() => setFocus(false), 100)}
        />
        {loading && <SpinnerRound />}
      </div>
      {focus && options.length > 0 && (
        <div className={styles.options}>
          {options.map((op) => (
            <div
              key={op.symbol}
              className={styles.option}
              onClick={() => {
                onOptionClick(op.symbol);
              }}
            >
              <div>{op.symbol}</div>
              <div>{op.shortname}</div>
              <div>{`${op.typeDisp} - ${op.exchange}`}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchAutoComplete;
