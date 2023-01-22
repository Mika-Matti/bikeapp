import React, { Component } from "react";
import { Consumer } from "../context";
import Journeynode from "./Journeynode";

export default class Journeys extends Component {
  constructor() {
    super();
    this.state = {
      journeys: [
        {
          journey_id: 1,
          departure_time: "",
          return_time: "",
        },
      ],
    };
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          const { journeys } = value;
          return (
            <div className="container">
              {/* header */}
              <h1 className="display-5 my-3 text-left">Journeys</h1>
              {/* item nodes */}
              {journeys.map((journey) => (
                <Journeynode key={journey.journey_id} journey={journey} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
