import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default function Number(props) {
  // Destructuring of props
  const { value, placeholder, name, min, max, prefix, suffix } = props;

  // Local state
  const [inputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  // onChange function
  const onChange = e => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix); // this will remove prefix
    if (suffix) value = value.replace(suffix); // this will remove suffix

    const patternNumeric = new RegExp("[0-9]*"); // Regex : just receive value from 0 until 9 and * will check all values.
    const isNumeric = patternNumeric.test(value); // check true/false and .test is function of patternNumeric.

    // +value as sama as Number(value) - This is shorthand to change string to number
    if (isNumeric && +value <= max && +value >= min) {
      // Running function which is passed through props.onChange
      // and passing data of object target to the function which will be further processed in the parent component.
      props.onChange({
        target: {
          name: name,
          value: value
        }
      });

      // This is to view value on UI
      setInputValue(`${prefix}${value}${suffix}`);
    }
  };

  return <div></div>;
}

// Declaration default props
Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: ""
};

// Declaration Proptypes
Number.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  outerClassName: propTypes.string
};
