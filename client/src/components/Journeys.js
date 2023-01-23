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
              {/* column headers for rows*/}
              <div className="row mx-0 border-top py-2">
                <div className="col-1">
                  <b>#</b>
                </div>
                <div className="col-3">
                  <b>Departed</b>
                </div>
                <div className="col-3">
                  <b>Returned</b>
                </div>
                <div className="col-2">
                  <b>Distance</b>
                </div>
                <div className="col-2">
                  <b>Duration</b>
                </div>
                <div className="col-1">
                  <b>More</b>
                </div>
              </div>
              {/* rows made of item nodes */}
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
