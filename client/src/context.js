import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    page: 1,
    journeys: [],
  };

  setPage = (p) => {
    console.log("moro");
    this.setState({ page: p });
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/journeys")
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
