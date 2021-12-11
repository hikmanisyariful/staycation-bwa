import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Button(props) {
  return <div></div>;
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "link"]), //type dari button akan menerima "button" atau "link"
  onClick: PropTypes.func, //Memastikan onClick menerima function
  target: PropTypes.string, // untuk link external biasanya
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isBlock: PropTypes.bool,
  hasShadow: PropTypes.bool
};
