import React, { Component } from "react";
// import search from "../Page/search";

class Result extends Component {
   
  render() {
    return (
      <>
      {this.props.results.map((item, idx) =>(
        <div key = {idx}>
            <h3>{item.name}</h3>
            <ul>
                <li>stargazers:{item.stargazers_count}</li>
                <li>forks:{item.forks_count}</li>
                <li>last worked on: {item.updated_at}</li>
            </ul>
        </div>
        )  ) }
      </>
    );
  }
}

export default Result;