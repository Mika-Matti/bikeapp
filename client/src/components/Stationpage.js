import React, { Component } from "react";
import { Consumer } from "../context";

export default class Stationpage extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { state, setItem } = value;
          const { item } = state;
          const { id } = this.props.match.params;
          const {
            station_fid,
            station_nimi,
            station_osoite,
            departed,
            returned,
          } = item;

          if (Object.keys(item).length === 0) {
            setItem("stations", id);
          }

          return (
            <div className="container-fluid mb-2">
              {/* Main header */}
              <h1 className="my-3 text-left">
                #{station_fid} Station {station_nimi}
              </h1>
              <div className="text-left">
                <p>
                  <b>Address:</b> {station_osoite}
                </p>
                <p>
                  <b>Journeys started:</b> {departed}
                </p>
                <p>
                  <b>Journeys ended:</b> {returned}
                </p>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
