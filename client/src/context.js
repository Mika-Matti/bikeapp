import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    page: 0,
    journeys: [],
  };

  setPage = (p) => {
    axios
      .get(`http://localhost:8080/journeys/page/${p}`)
      .then((res) => this.setState({ page: p, journeys: res.data }));
  };

  //TODO fetch 25 journeys depending on page number.
  componentDidMount() {
    axios
      .get(`http://localhost:8080/journeys/page/0`)
      .then((res) => this.setState({ journeys: res.data }));
  }

  render() {
    return (
      <Context.Provider value={{ state: this.state, setPage: this.setPage }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
