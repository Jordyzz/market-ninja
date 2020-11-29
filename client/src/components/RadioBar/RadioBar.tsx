import React from "react";
import classNames from "classnames";

import styles from "./RadioBar.scss";
import { RadioBarProps } from "./RadioBar.interface";

const RadioBar = ({ options, selected, onClick }: RadioBarProps) => {
  return (
    <div className={styles.wrapper}>
      {options.map((option) => (
        <div
          key={option}
          className={classNames(
            styles.option,
            selected === option && styles.selected
          )}
          onClick={() => onClick(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default RadioBar;
