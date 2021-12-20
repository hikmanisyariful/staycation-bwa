import React, { Component } from "react";

import PropTypes from "prop-types";
import { InputNumber, InputDate } from "elements/Form";

export default class Booking extends Component {
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
    console.log("Booking - UpdateData", e.target);
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
    console.log("componentDidUpdate");
    console.log(prevState.data, data);

    if (prevState.data.duration !== data.duration) {
      console.log("=========== TEST ==============");
      console.log("THIS IS STARTDATE", data.date.startDate);
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        data.date.endDate.setDate(startDate.getDate() + +data.duration)
      );

      console.log("startDate : ", startDate);
      console.log("endDate : ", endDate);
      console.log("=========== TEST ==============");

      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate
          }
        }
      });

      console.log("This update data : ", data);
    }

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate() - 1;

      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          duration: countDuration
        }
      });
    }
  }

  render() {
    const { data } = this.state;
    const { itemDetails } = this.props;

    return (
      <div className="card bordered" style={{ padding: "60px 80px" }}>
        {/* Title Info */}
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="h2 text-teal mb-4">
          ${itemDetails.price}{" "}
          <span className="text-gray-500 font-weight-light">
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
      </div>
    );
  }
}

Booking.propTypes = {
  itemDetails: PropTypes.object,
  startBooking: PropTypes.func
};
