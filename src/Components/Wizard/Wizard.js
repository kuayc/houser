import React, { Component } from "react";
import "../Wizard/Wizard.css";

export default class Wizard extends Component {
  clearReduxState() {}
  render() {
    return (
      <section className="wizard-new-list">
        <h1>Add New House</h1>
        <button onClick={this.clearReduxState}>Cancel</button>
      </section>
    );
  }
}
