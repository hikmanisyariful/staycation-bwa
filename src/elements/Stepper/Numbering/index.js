import React from "react";

import PropTypes from "prop-types";

import "./index.scss";

export default function Numbering({ style, className, data, current }) {
  console.log("PROPS NUMBERING", style, className, data, current);
  const KeysOfData = Object.keys(data);

  return (
    <ol className={["stepper", className].join(" ")} style={style}>
      {KeysOfData.map((list, index) => {
        let isActive = list === current ? "active" : "";

        if (index + 1 === KeysOfData.length) {
          isActive = "";
          return null;
        }

        return (
          <li key={`list-${index}`} className={[isActive].join(" ")}>
            {index + 1}
          </li>
        );
      })}
    </ol>
  );
}

Numbering.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  current: PropTypes.string
};
