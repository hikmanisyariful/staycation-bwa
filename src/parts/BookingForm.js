import React, { Component } from "react";

import PropTypes from "prop-types";

export default class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection"
        }
      }
    };
  }

  render() {
    return <div></div>;
  }
}

BookingForm.propTypes = {
  itemDetails: PropTypes.object,
  startBooking: PropTypes.func
};
