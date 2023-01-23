import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Journeynode extends Component {
  parseDate = (date) => {
    date = String(date).split(" ");
    const days = String(date[0]).split("-");
    return [parseInt(days[2]), "/", parseInt(days[1]), "/", parseInt(days[0])];
  };

  render() {
    const {
      journey_id,
      departure_time,
      return_time,
      departure_station_id,
      departure_station_name,
      return_station_id,
      return_station_name,
      journey_distance,
      journey_duration,
    } = this.props.journey;

    return (
      <div className="row mx-0 border-top pt-2">
        <div className="col-1 text-left">
          <b>{journey_id}</b>
        </div>
        <div className="col-9 px-0 text-left">
          <div className="row mx-0">
            <div className="col-sm-4 col-md-2">
              {this.parseDate(departure_time)}
            </div>
            <div className="col-sm-4 col-md-2 text-break">
              {departure_station_name}
            </div>
            <div className="col-sm-4 col-md-2">
              {this.parseDate(return_time)}
            </div>
            <div className="col-sm-4 col-md-2 text-break">
              {return_station_name}
            </div>
            <div className="col-sm-4 col-md-2">{journey_distance}</div>
            <div className="col-sm-4 col-md-2">{journey_duration}</div>
          </div>
        </div>
        <div className="col-2 text-left">
          <Link
            type="button"
            className="btn btn-dark"
            to={`journeys/${journey_id}`}
          >
            Details
          </Link>
        </div>
      </div>
    );
  }
}

Journeynode.propTypes = {
  journey: PropTypes.object.isRequired,
};
