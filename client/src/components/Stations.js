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
              <div className="row mx-0 border-top py-2">
                <div className="col-1 text-left">
                  <b>#</b>
                </div>
                <div className="col-9 px-0 text-left">
                  <div className="row mx-0">
                    <div className="col-sm-4 col-md-4 ">
                      <b>Station</b>
                    </div>
                    <div className="col-sm-4 col-md-4 ">
                      <b>Address</b>
                    </div>
                    <div className="col-sm-2 col-md-2">
                      <b>Journeys started</b>
                    </div>
                    <div className="col-sm-2 col-md-2">
                      <b>Journeys ended</b>
                    </div>
                  </div>
                </div>
                <div className="col-2 text-left">
                  <b>More</b>
                </div>
              </div>
              {/* rows made of item nodes */}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
