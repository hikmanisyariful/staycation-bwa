import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default function Number(props) {
  // Destructuring of props
  const { value, placeholder, name, min, max, prefix, suffix } = props;

  // Local state
  const [inputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  return <div></div>;
}

// Declaration default props
Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: ""
};
