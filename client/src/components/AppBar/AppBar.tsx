import React from "react";
import classNames from "classnames";

import styles from "./AppBar.scss";
import { NavLink, useLocation } from "react-router-dom";
import { menuItems } from "./menuItems";
import Icon from "@components/Icon";

const AppBar = () => {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}></div>
      <div className={styles.navigation}>
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.route}
            className={classNames(
              styles.navLink,
              location.pathname.includes(item.route) && styles.activeLink
            )}
          >
            <Icon type={item.icon} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AppBar;
