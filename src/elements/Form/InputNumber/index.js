import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default function Number(props) {
  const { value, placeholder, name, min, max, prefix, suffix } = props;

  const [inputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  return <div></div>;
}
