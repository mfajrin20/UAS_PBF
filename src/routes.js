import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";


function Routes() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/:query?" component={Home} />
          <Route path="/details/:name?" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
