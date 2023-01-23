import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Journeynode extends Component {
  render() {
    const { journey_id, departure_time, return_time } = this.props.journey;

    return (
      <div className="row mx-0 border-top pt-2">
        <div className="col-1">
          <b>{journey_id}</b>
        </div>
        <div className="col-3">{departure_time}</div>
        <div className="col-3">{return_time}</div>
        <div className="col-2">Distance</div>
        <div className="col-2">Duration</div>
        <div className="col-1">
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
  Journey: PropTypes.object.isRequired,
};
