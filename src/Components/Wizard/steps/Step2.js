import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./steps_css/Step2.css";
import Wizard from "../Wizard";
import store, { UPDATE_IMG } from "../../../store";

export default class WizardStep2 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      img: reduxState.img,
    };
  }

  componentDidMount() {
    const reduxState = store.getState();
    this.setState({
      img: reduxState.img,
    });
  }

  handleChangeImg(e) {
    this.setState({
      img: e.target.value,
    });
  }

  saveToRedux = () => {
    store.dispatch({
      type: UPDATE_IMG,
      payload: this.state.img,
    });
  };

  render() {
    return (
      <>
        <Wizard />
        <div className="step-2-main">
          <section className="step-2-info">
            <h1>Image URL: </h1>
            <input
              type="text"
              value={this.state.img}
              onChange={(e) => this.handleChangeImg(e)}
            ></input>
          </section>
          <section className="step-2-buttons">
            <Link to="/wizard/step1">
              <button className="next-button-2">Prev</button>
            </Link>
            <Link to="/wizard/step3">
              <button className="next-button-2" onClick={this.saveToRedux}>
                Next Step
              </button>
            </Link>
          </section>
        </div>
      </>
    );
  }
}
