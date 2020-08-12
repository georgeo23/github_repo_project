import React, { Component } from "react";
import search from "../Page/search";

class Result extends Component {
  render() {
    return (
      <>
      <h1>{this.props.username} </h1>
        <h2 className="title">{this.props.results.userData}</h2>
        {/* <section className="Films">{this.props.film.description}</section> */}
      </>
    );
  }
}

export default Result;