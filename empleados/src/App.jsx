import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { AppRoutes } from "./shared/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoutes />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
