import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    journeys: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/journeys")
      .then((res) => this.setState({ journeys: res.data }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
