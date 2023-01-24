import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    page: 0,
    items: [],
    item: {},
  };

  setPage = (pageName, pageNum) => {
    axios
      .get(`http://localhost:8080/${pageName}/page/${pageNum}`)
      .then((res) => this.setState({ page: pageNum, items: res.data }));
  };

  setItem = (itemName, id) => {
    axios
      .get(`http://localhost:8080/${itemName}/${id}`)
      .then((res) => this.setState({ item: res.data[0] }));
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          setPage: this.setPage,
          setItem: this.setItem,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
