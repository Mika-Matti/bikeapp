import React, { Component } from "react";
import { Consumer } from "../context";
import Journeynode from "./Journeynode";
import Pagebuttons from "./Pagebuttons";

export default class Journeys extends Component {
  constructor() {
    super();
    this.state = {
      journeys: [
        {
          journey_id: 0,
          departure_time: "",
          return_time: "",
          departure_station_id: 0,
          departure_station_name: "",
          return_station_id: 0,
          return_station_name: "",
          journey_distance: 0,
          journey_duration: 0,
        },
      ],
    };
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          const { state, setPage } = value;
          const { page, journeys } = state;

          const { number } = this.props.match.params;
          if (Number(number) !== page + 1) {
            setPage(number - 1);
          }

          return (
            <div className="container-fluid mb-2">
              {/* header */}
              <h1 className="my-3 text-left">Journeys</h1>
              {/* column headers for rows*/}
              <div className="row mx-0 border-top py-2">
                <div className="col-1 text-left">
                  <b>#</b>
                </div>
                <div className="col-9 px-0 text-left">
                  <div className="row mx-0">
                    <div className="col-sm-4 col-md-2 ">
                      <b>Departed</b>
                    </div>
                    <div className="col-sm-4 col-md-2 ">
                      <b>Departure station</b>
                    </div>
                    <div className="col-sm-4 col-md-2">
                      <b>Returned</b>
                    </div>
                    <div className="col-sm-4 col-md-2">
                      <b>Return station</b>
                    </div>
                    <div className="col-sm-4 col-md-2">
                      <b>Distance {"(meters)"}</b>
                    </div>
                    <div className="col-sm-4 col-md-2">
                      <b>Duration {"(seconds)"}</b>
                    </div>
                  </div>
                </div>
                <div className="col-2 text-left">
                  <b>More</b>
                </div>
              </div>
              {/* rows made of item nodes */}
              {journeys.map((journey) => (
                <Journeynode key={journey.journey_id} journey={journey} />
              ))}
              <Pagebuttons value={{ page: page, tableName: "journeys" }} />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
