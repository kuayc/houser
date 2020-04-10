import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import House from "../House/House";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
    };
  }

  componentDidMount() {
    axios.get("/api/houses").then((response) => {
      this.setState({
        houses: response.data,
      });
      console.log(response.data);
    });
  }

  render() {
    const { houses } = this.state;
    return (
      <div className="dash-container">
        <section className="section-1">
          <h1>Dashboard</h1>
          <Link to="/wizard/step1">
            <button>Add New Property</button>
          </Link>
        </section>

        <section className="section-2">
          {houses ? (
            houses.map((house) => (
              <House
                houses={this.houses}
                name={house.name}
                address={house.address}
                city={house.city}
                state={house.state}
                zip={house.zip}
                img={house.img}
                mortgage={house.mortgage}
                rent={house.rent}
                id={house.id}
                key={house.id}
              />
            ))
          ) : (
            <p>No houses to display</p>
          )}
        </section>
      </div>
    );
  }
}
