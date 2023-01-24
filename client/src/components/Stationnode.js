import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Stationnode extends Component {
  render() {
    const { station_fid, station_nimi, station_osoite, departed, returned } =
      this.props.station;

    return (
      <div className="row mx-0 border-top py-2">
        <div className="col-1 text-left">{station_fid}</div>
        <div className="col-9 px-0 text-left">
          <div className="row mx-0">
            <div className="col-sm-4 col-md-4 ">{station_nimi}</div>
            <div className="col-sm-4 col-md-4 ">{station_osoite}</div>
            <div className="col-sm-2 col-md-2">{departed}</div>
            <div className="col-sm-2 col-md-2">{returned}</div>
          </div>
        </div>
        <div className="col-2 text-left">BUTTON</div>
      </div>
    );
  }
}

Stationnode.propTypes = {
  station: PropTypes.object.isRequired,
};
