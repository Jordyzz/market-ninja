import React, { useState, useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";

import store from "@redux/store";
import App from "./App";
import { themeService } from "@core/ThemeService";
import GlobalBusyIndicator from "@components/GlobalBusyIndicator";

function Root() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    Promise.all([themeService.init()]).then(() => {
      setShowApp(true);
    });
  }, []);

  if (!showApp) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <App />
      <GlobalBusyIndicator />
    </ReduxProvider>
  );
}

export default Root;
