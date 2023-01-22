import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Journeynode extends Component {
  render() {
    const { journey_id, departure_time, return_time } = this.props.journey;

    return (
      <div className="row mx-0 border-bottom pb-3 mb-3">
        <div className="col-md-5 text-left">
          <h3>{journey_id}</h3>
          <p>
            {departure_time} - {return_time}
          </p>
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
