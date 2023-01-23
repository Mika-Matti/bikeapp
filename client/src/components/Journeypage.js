import React, { Component } from "react";
//import axios from "axios";

export default class Journeypage extends Component {
  state = {
    departure_time: "",
    return_time: "",
    item_content: "",
    links: [],
  };

  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   console.log(id);

  //   const itemData = `http://localhost:8080/items/${id}`;
  //   const itemLinks = `http://localhost:8080/items/${id}/links`;

  //   const requestOne = axios.get(itemData);
  //   const requestTwo = axios.get(itemLinks);

  //   axios.all([requestOne, requestTwo]).then(
  //     axios.spread((...responses) => {
  //       const responseOne = responses[0];
  //       const responseTwo = responses[1];
  //       this.setState({
  //         ...responseOne.data[0],
  //         links: responseTwo.data,
  //       });
  //     })
  //   );
  // }

  render() {
    const { departure_time, return_time, journey_content, links } = this.state;

    const linkJourneys = links.map((link) => (
      <li key={link.link_id}>
        <a href={link.link_url}>{link.link_desc}</a>
      </li>
    ));

    return (
      <div className="container">
        <div className="px-3">
          <div className="row">
            <div className="col-lg-3 col-xs-12 border-right text-left ">
              <h3 className="mt-3 mb-1">Departure and return times</h3>
              <p>
                {departure_time} - {return_time}
              </p>
              <h3 className="mb-1">Item data</h3>
              <ul>{linkJourneys}</ul>
            </div>
            <div className="col-lg-9 py-3 col-xs-12 border-right mb-3">
              <h2 className="text-left pt-1">{return_time}</h2>
              <div
                className="text-left"
                dangerouslySetInnerHTML={{
                  __html: journey_content,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}