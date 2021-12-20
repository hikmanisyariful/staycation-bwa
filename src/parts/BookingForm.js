import React, { Component } from "react";

import PropTypes from "prop-types";
import { InputNumber, InputDate } from "elements/Form";
import Button from "elements/Button";

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

  // function for update data
  updateData = e => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;
    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.date,
          duration: countDuration
        }
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration1 - 1) // minus 1 because booking hotel hitungannya per malam, bukan per hari
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate
          }
        }
      });
    }
  }

  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;

    return (
      <div className="card bordered" style={{ padding: "60px 80px" }}>
        {/* Title Info */}
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="h2 text-teal mb-4">
          Rp. {itemDetails.price}{" "}
          <span className="text-gary-500 font-weight-light">
            per {itemDetails.unit}
          </span>
        </h5>

        {/* InputNumber */}
        <label htmlFor="duration">How long you will stay?</label>
        <InputNumber
          max={30}
          suffix=" night"
          isSuffixPlural
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />

        {/* InputDate */}
        <label htmlFor="date">Pick a date</label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />

        {/* Info result */}
        <h6
          className="text-gray-500 font-weight-light"
          style={{ marginBottom: 40 }}
        >
          You will pay{" "}
          <span className="text-gray-900">
            {itemDetails.price * data.duration} USD
          </span>
          {" per "}
          <span className="text-gray-900">
            {data.duration} {itemDetails.unit}
          </span>
        </h6>

        {/* Button */}
        <Button
          className="btn"
          hasShadow
          isPrimary
          isBlock
          onClick={startBooking}
        >
          Continue to Booking
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: PropTypes.object,
  startBooking: PropTypes.func
};
