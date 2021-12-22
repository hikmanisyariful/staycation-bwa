import React from "react";

import completedImg from "assets/images/completed.svg";

export default function Completed(props) {
  return (
    <div className="container" style={{ marginBottom }}>
      <div className="row justify-content-center text-center">
        <div className="col-4">
          <img
            src={completedImg}
            alt="completed checkout apartment"
            className="img-fli"
          />
          <p className="text-gray-500">
            We will inform you via email later once the transaction has been
            accepted
          </p>
        </div>
      </div>
    </div>
  );
}
