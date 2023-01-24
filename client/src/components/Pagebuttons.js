import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Pagebuttons extends Component {
  render() {
    const { page, tableName } = this.props.value;
    return (
      <div className="row my-2">
        <div className="col">
          {page > 0 ? (
            <Link
              type="button"
              className="btn btn-dark"
              to={`/${tableName}/page/${page}`}
            >
              Previous page : {page}
            </Link>
          ) : (
            <button type="button" className="btn btn-dark" disabled={true}>
              Previous page
            </button>
          )}
        </div>
        <div className="col">
          <b>{page + 1}</b>
        </div>
        <div className="col">
          <Link
            type="button"
            className="btn btn-dark"
            to={`/${tableName}/page/${page + 2}`}
          >
            Next page: {page + 2}
          </Link>
        </div>
      </div>
    );
  }
}
