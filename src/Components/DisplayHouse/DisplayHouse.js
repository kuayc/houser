import React, { Component } from "react";
import Axios from "axios";

export default class House extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
    };
  }

  componentDidMount() {
    Axios.get(`/api/houses?house=${this.props.match.params.name}`).then(
      (results) => {
        this.setState({
          students: results.data,
        });
      }
    );
  }

  render() {
    return (
      <div className="display-house-container">
        <h1>Displayed house</h1>
        <h1>{this.props.match.params.id}</h1>
      </div>
    );
  }
}
