import React, { Component } from "react";

// Import component
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";

// Import data
import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        {/* ...this.props => Passing semua props di class LandingPage ke Header component*/}
        <Header {...this.props}></Header>
        {/* Passing data landingPage Hero */}
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
      </>
    );
  }
}
