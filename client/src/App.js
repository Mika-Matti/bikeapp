import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";

import Header from "./components/Header";
import Items from "./components/Items";
import Itempage from "./components/Itempage";
import About from "./components/pages/About";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header title="bikeApp" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Items} />
              <Route exact path="/items/:id" component={Itempage} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
