import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    page: 0,
    items: [],
  };

  setPage = (pageName, pageNum) => {
    axios
      .get(`http://localhost:8080/${pageName}/page/${pageNum}`)
      .then((res) => this.setState({ page: pageNum, items: res.data }));
  };

  render() {
    return (
      <Context.Provider value={{ state: this.state, setPage: this.setPage }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
