import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Itemnode extends Component {
  render() {
    const { item_id, item_name, item_desc } = this.props.item;

    return (
      <div className="row mx-0 border-bottom pb-3 mb-3">
        <div className="col-md-5 text-left">
          <h3>{item_name}</h3>
          <p>{item_desc}</p>
          <Link type="button" className="btn btn-dark" to={`items/${item_id}`}>
            Details
          </Link>
        </div>
      </div>
    );
  }
}

Itemnode.propTypes = {
  item: PropTypes.object.isRequired,
};
