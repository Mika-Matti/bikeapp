import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Provider } from "./context";

import Header from "./components/Header";
import Journeys from "./components/Journeys";
import Stationpage from "./components/Stationpage";
import Stations from "./components/Stations";
import About from "./components/pages/About";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header title="bikeApp" />
          <div className="container-fluid">
            <Switch>
              <Route exact path="/">
                <Redirect to={`/journeys/page/1`} />
              </Route>
              <Route exact path="/journeys/page/:number" component={Journeys} />
              <Route exact path="/stations/page/:number" component={Stations} />
              <Route exact path="/stations/:id" component={Stationpage} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
