import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default function Number(props) {
  // Destructuring of props
  const {
    value,
    placeholder,
    name,
    min,
    max,
    prefix,
    suffix,
    isSuffixPlural
  } = props;

  // Local state
  // const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  // onChange function
  const onChange = e => {
    let value = String(e.target.value);

    if (+value <= max && +value >= min) {
      // Running function which is passed through props.onChange
      // and passing data of object target (adjust event.target) to the function which will be further processed in the parent component.
      props.onChange({
        target: {
          name: name,
          value: +value
        }
      });
    }
  };

  const minus = () => {
    value > min &&
      //  passing data of object target (adjust event.target)
      onChange({
        target: {
          name: name,
          value: +value - 1
        }
      });
  };

  const plus = () => {
    value < max &&
      //  passing data of object target (adjust event.target)
      onChange({
        target: {
          name: name,
          value: +value + 1
        }
      });
  };

  return (
    <div className={["input-number mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          readOnly
          className="form-control"
          min={min}
          max={max}
          name={name}
          placeholder={placeholder ? placeholder : "0"}
          value={`${prefix}${value}${suffix}${
            isSuffixPlural && +value > 1 ? "s" : ""
          }`}
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
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
  isSuffixPlural: PropTypes.bool,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string
};
