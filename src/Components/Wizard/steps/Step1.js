import React, { Component } from "react";
import { Link } from "react-router-dom";
import Wizard from "../Wizard";
import "./steps_css/Step1.css";
import store, {
  UPDATE_NAME,
  UPDATE_ADDRESS,
  UPDATE_CITY,
  UPDATE_STATE,
  UPDATE_ZIP,
} from "../../../store";

export default class WizardStep1 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip,
    };
  }

  componentDidMount() {
    const reduxState = store.getState();
    this.setState({
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip,
    });
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  handleChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  handleChangeState(e) {
    this.setState({
      state: e.target.value,
    });
  }

  handleChangeZip(e) {
    this.setState({
      zip: e.target.value,
    });
  }

  saveToRedux = () => {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state.name,
    });
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: this.state.address,
    });
    store.dispatch({
      type: UPDATE_CITY,
      payload: this.state.city,
    });
    store.dispatch({
      type: UPDATE_STATE,
      payload: this.state.state,
    });
    store.dispatch({
      type: UPDATE_ZIP,
      payload: this.state.zip,
    });
  };

  render() {
    return (
      <>
        <Wizard />
        <div className="step-1-main">
          <section className="step-1-info">
            <h1>Property Name</h1>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.handleChangeName(e)}
            ></input>
            <h1>Address</h1>
            <input
              type="text"
              value={this.state.address}
              onChange={(e) => this.handleChangeAddress(e)}
            ></input>
            <div className="location">
              <h1>City</h1>
              <input
                type="text"
                value={this.state.city}
                onChange={(e) => this.handleChangeCity(e)}
              ></input>
              <h1>State</h1>
              <input
                type="text"
                value={this.state.state}
                onChange={(e) => this.handleChangeState(e)}
              ></input>
              <h1>Zip</h1>
              <input
                type="text"
                value={this.state.zip}
                onChange={(e) => this.handleChangeZip(e)}
              ></input>
            </div>
          </section>
          <section className="step-1-buttons">
            <Link to="/">
              <button className="next-button-1">Prev</button>
            </Link>
            <Link to="/wizard/step2">
              <button className="next-button-1" onClick={this.saveToRedux}>
                Next Step
              </button>
            </Link>
          </section>
        </div>
      </>
    );
  }
}
