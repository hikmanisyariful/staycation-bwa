import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputDate from "./index";

class TestInput extends React.Component {
  state = {
    // value input date will always receive 3 data. That is startDate, endDate, and key.
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <InputDate
        max={30}
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
    );
  }
}

const setup = () => {
  const { container } = render(<TestInput />);
  const wrapper = container.querySelector(`.input-date`);
  const input = container.querySelector(`input.form-control`);

  return { container, wrapper, input };
};

test("It should have wrapper with className .form-control", () => {
  const { wrapper } = setup();

  expect(wrapper).toBeInTheDocument();
});

test("It should have <input> tag and className .form-control", () => {
  const { input } = setup();

  expect(input).toBeInTheDocument();
});

test("It should show date picker when click input field", () => {
  const { container, input } = setup();

  // screen.debug();
  fireEvent.click(input, { button: 1 });
  const datePickerWrapper = container.querySelector(`.date-range-wrapper`);
  // screen.debug();

  expect(datePickerWrapper).toBeInTheDocument();
});
