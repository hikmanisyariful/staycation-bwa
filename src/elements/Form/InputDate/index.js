import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

import "./index.scss";

export default function Date(props) {
  const { value, placeholder, name } = props;

  // To toggle date picker
  const [isShowed, setIsShowed] = useState(false);

  // datePicker function
  datePickerChange = value => {
    // format event like event.target.value
    const target = {
      target: {
        value: value.selection,
        name: name
      }
    };
    props.onChange(target);
  };

  // Lifecycle useEffect
  useEffect(() => {
    // componentDidMount()
    document.addEventListener("mousedown", handleClickOutside);

    // componentWillUnmount()
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  // useRef
  const refDate = useRef(null);
  const handleClickOutside = event => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  // check function
  const check = focus => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return <div></div>;
}

Date.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string
};
