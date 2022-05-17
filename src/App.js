import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AddContact from "./Components/AddContact";
import EditContact from "./Components/EditContact";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />

        <Route path="/add">
          <AddContact />
        </Route>

        <Route path="/edit/:id">
          <EditContact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
