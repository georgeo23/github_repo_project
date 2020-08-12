import React, { Component } from "react";
// import search from "../Page/search";

class Result extends Component {
  render() {
    return (
      <>
      {this.props.results.map((item, idx) => (
          <p key={idx}>{item.name}</p>
      ))}
      </>
    );
  }
}

export default Result;