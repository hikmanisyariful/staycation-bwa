import React from "react";

import PropTypes from "prop-types";
import Button from "elements/Button";

import "./index.scss";

export default function Breadcrumb(props) {
  const { data } = props;

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {data.map((item, index) => {
          return (
            <li
              key={`breadcrumb-${index}`}
              className={`breadcrumb-item${
                index === data.length - 1 ? " active" : ""
              }`}
            >
              {index === data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button type="link" href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string
};
