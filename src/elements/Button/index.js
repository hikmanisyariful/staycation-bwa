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

  // untuk memastikan button menerima props onClick
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");

    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_black" : undefined} //Jika kita menerima target perlu menyertakan rel, jika tidak akan ada warning
          rel={props.target === "_blank" ? "noopener norefferer" : undefined} // fungsi dari noopener dan norefferer salah satunya untuk SEO
        >
          {props.children}
        </a>
      );
    } else {
      <Link
        to={props.href}
        className={className.join(" ")}
        style={props.style}
        onClick={onClick} //Untuk menjalankan function setelah kita klik
      >
        {props.children}
      </Link>;
    }
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClcik}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "link"]), //type dari button akan menerima "button" atau "link"
  onClick: PropTypes.func, //Memastikan onClick menerima function
  target: PropTypes.string, // untuk link external biasanya
  href: propTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isBlock: PropTypes.bool,
  hasShadow: PropTypes.bool
};
