import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";

import Header from "./components/Header";
import Journeys from "./components/Journeys";
import Journeypage from "./components/Journeypage";
import About from "./components/pages/About";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header title="bikeApp" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Journeys} />
              <Route exact path="/journeys/:id" component={Journeypage} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
