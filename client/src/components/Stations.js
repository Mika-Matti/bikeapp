import React, { Component } from "react";
import { Consumer } from "../context";
import Stationnode from "./Stationnode";
import Pagebuttons from "./Pagebuttons";

export default class Stations extends Component {
  constructor() {
    super();
    this.state = {
      stations: [
        {
          station_fid: 0,
          station_nimi: "",
          station_osoite: "",
          departed: 0,
          returned: 0,
        },
      ],
    };
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          const { state, setPage } = value;
          const { page, items } = state;
          const { number } = this.props.match.params;

          if (Number(number) !== page + 1 || items.length === 0) {
            setPage("stations", number - 1);
          }

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
              {items.map((station) => (
                <Stationnode key={station.station_fid} station={station} />
              ))}
              <Pagebuttons
                value={{
                  page: page,
                  tableName: "stations",
                  pageLength: items.length,
                }}
              />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
