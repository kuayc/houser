import React, { Component } from "react";
import Wizard from "../Wizard";
import { Link } from "react-router-dom";
import "./steps_css/Step3.css";
import store, { UPDATE_MORTGAGE, UPDATE_RENT } from "../../../store";
import axios from "axios";

export default class WizardStep3 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip,
      img: reduxState.img,
      mortgage: reduxState.mortgage,
      rent: reduxState.rent,
    };
  }

  componentDidMount() {
    const reduxState = store.getState();
    this.setState({
      mortgage: reduxState.mortgage,
      rent: reduxState.rent,
    });
  }

  handleChangeMortgage(e) {
    this.setState({
      mortgage: e.target.value,
    });
  }

  handleChangeRent(e) {
    this.setState({
      rent: e.target.value,
    });
  }

  saveToDatabase = () => {
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: this.state.mortgage,
    });
    store.dispatch({
      type: UPDATE_RENT,
      payload: this.state.rent,
    });
    const reduxState = store.getState();
    axios
      .post("/api/houses", {
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip,
        img: reduxState.img,
        mortgage: reduxState.mortgage,
        rent: reduxState.rent,
      })
      .then(() => {
        this.setState({
          name: "",
          address: "",
          city: "",
          state: "",
          zip: 0,
          img: "",
          mortgage: 0,
          rent: 0,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <Wizard />
        <div className="step-3-main">
          <section className="step-3-info">
            <h1>Recommended Rent: $0</h1>
            <h1>Mortgage Price: </h1>
            <input
              type="text"
              value={this.state.mortgage}
              onChange={(e) => this.handleChangeMortgage(e)}
            ></input>
            <h1>Rent Price: </h1>
            <input
              type="text"
              value={this.state.rent}
              onChange={(e) => this.handleChangeRent(e)}
            ></input>
          </section>
          <section className="step-3-buttons">
            <Link to="/wizard/step2">
              <button className="next-button-3">Prev</button>
            </Link>
            <Link to="/">
              <button className="next-button-3-2" onClick={this.saveToDatabase}>
                Complete
              </button>
            </Link>
          </section>
        </div>
      </>
    );
  }
}
