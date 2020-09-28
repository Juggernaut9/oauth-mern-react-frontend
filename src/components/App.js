import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </>
  );
}

export default App;
