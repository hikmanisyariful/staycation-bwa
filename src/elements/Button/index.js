import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

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
