import React from "react";
import classNames from "classnames";

import iconsMap from "./iconsMap";
import { IconProps } from "./Icon.interface.d";
import styles from "./Icon.scss";

function Icon(props: IconProps) {
  const { className, type, onClick, style } = props;

  if (!type) return null;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: iconsMap[type] }}
      className={classNames(styles.icon, className)}
      {...{ onClick, style }}
    />
  );
}

export default Icon;
