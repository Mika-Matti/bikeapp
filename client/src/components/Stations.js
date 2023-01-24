import React, { Component } from "react";
import { Consumer } from "../context";

export default class Stations extends Component {
  constructor() {
    super();
    this.state = {
      stations: [
        {
          station_fid: 0,
          station_id: 0,
          station_nimi: "",
          station_osoite: "",
          station_kaupunki: "",
          station_operator: "",
          station_capacity: "",
          station_x: 0,
          station_y: 0,
        },
      ],
    };
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="container-fluid mb-2">
              {/* header */}
              <h1 className="my-3 text-left">Stations</h1>
              {/* column headers for rows*/}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
