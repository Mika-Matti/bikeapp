import React, { Component } from "react";
import { Consumer } from "../context";
import Itemnode from "./Itemnode";

export default class Items extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          item_id: 1,
          item_name: "Item name",
          item_desc: "Item description",
        },
      ],
    };
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          const { items } = value;
          return (
            <div className="container">
              {/* header */}
              <h1 className="display-5 my-3 text-left">Journeys</h1>
              {/* item nodes */}
              {items.map((item) => (
                <Itemnode key={item.item_id} item={item} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
