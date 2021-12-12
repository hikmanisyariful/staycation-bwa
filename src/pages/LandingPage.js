import React, { Component } from "react";
import Header from "parts/Header";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        {/* ...this.props => Passing semua props di class LandingPage ke Header component*/}
        <Header {...this.props}></Header>
      </>
    );
  }
}
