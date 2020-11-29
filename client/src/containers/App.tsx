import React from "react";
import { Router } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";

import history from "@core/history";
import MainPage from "@pages/MainPage";
import AppBar from "@components/AppBar";
import styles from "./App.scss";
import MarketsPage from "@pages/MarketsPage";
import TransactionsPage from "@pages/TransactionsPage";

function App() {
  return (
    <Router history={history}>
      <div className={styles.wrapper}>
        <AppBar />
        <div className={styles.content}>
          <Switch>
            <Route path="/home" component={MainPage} />
            <Route path="/markets" component={MarketsPage} />
            <Route path="/transaction-history" component={TransactionsPage} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
