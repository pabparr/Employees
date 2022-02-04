import React from "react";
import { Route } from "react-router-dom";
import routes from "../config/routes-config";

export const AppRoutes = () => {
  return (
    <div>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact}>
          <route.component />
        </Route>
      ))}
    </div>
  );
};
