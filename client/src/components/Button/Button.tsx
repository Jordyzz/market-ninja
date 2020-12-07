import React from "react";
import classNames from "classnames";

import { ButtonProps } from "./Button.interface";
import styles from "./Button.scss";

const Button = ({ className, onClick, children }: ButtonProps) => {
  return (
    <div className={classNames(styles.wrapper, className)} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
