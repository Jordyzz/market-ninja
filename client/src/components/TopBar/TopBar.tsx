import React, { useCallback } from "react";

import { selectedService } from "@pages/MainPage/SelectedService";
import styles from "./TopBar.scss";
import { useSelector } from "@redux/useSelector";
import SearchAutoComplete from "./SearchAutoComplete";
import { httpService } from "@core/HttpService/HttpService";
import Chip from "@components/Chip";
import Button from "@components/Button";
import { modalService } from "@core/ModalService/ModalService";

const TopBar = () => {
  const selectedItems = useSelector((state) => state.selectedItems);
  const { user } = useSelector((state) => state);

  const fetchOptions = useCallback((input: string) => {
    return httpService
      .api({
        type: "searchAutoComplete",
        disableBI: true,
        urlParams: { q: input },
      })
      .then((res) => res);
  }, []);

  const onOptionClick = useCallback(
    (symbol: string) => selectedService.setSelectedItem(symbol),
    []
  );

  return (
    <div className={styles.wrapper}>
      <SearchAutoComplete {...{ fetchOptions, onOptionClick }} />
      <div className={styles.chipContainer}>
        {selectedItems.map((item) => (
          <Chip
            key={item.symbol}
            label={item.symbol}
            onDelete={onOptionClick}
          />
        ))}
      </div>
      {!user ? (
        <div className={styles.btnContainer}>
          <Button onClick={() => modalService.openModal("register")}>
            Register
          </Button>
          <Button
            onClick={() => modalService.openModal("login")}
            className={styles.loginButton}
          >
            Login
          </Button>
        </div>
      ) : (
        <div>{user.email}</div>
      )}
    </div>
  );
};

export default TopBar;
