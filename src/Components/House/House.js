import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./House.css";

export default class House extends Component {
  render() {
    return (
      <div className="house-card">
        <section className="img-section">
          <img src={this.props.img} alt="house-img"></img>
        </section>
        <section>
          <h2>Property Name: {this.props.name}</h2>
          <h2>Address: {this.props.address}</h2>
          <h2>City: {this.props.city}</h2>
          <h2>State: {this.props.state}</h2>
          <h2>Zip: {this.props.zip}</h2>
        </section>
        <section>
          <h2>Monthly Mortgage: ${this.props.mortgage}</h2>
          <h2>Desired Rent: ${this.props.rent}</h2>
          <Link to={`/displayhouse/${this.props.id}`}>
            <button>View House</button>
          </Link>
        </section>
      </div>
    );
  }
}
