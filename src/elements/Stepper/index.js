import React, { useState } from "react";

import PropTypes from "prop-types";

export default function Stepper(props) {
  // Get data from props
  const { steps, initialStep } = props;
  const stepsKeys = Object.keys(steps);

  // Setup local state
  const [CurrentStep, setCurrentStep] = useState(
    stepsKeys.indexOf(initialStep) > 1 ? initialStep : stepsKeys[0]
  );

  const totalStep = stepsKeys.length;
  const indexStep = stepsKeys.indexOf(CurrentStep);

  const prevStep = () => {
    if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
  };

  const nextStep = () => {
    if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1]);
  };

  // console.log(CurrentStep);
  return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}

Stepper.propTypes = {
  steps: PropTypes.object.isRequired,
  initialStep: PropTypes.string
};

export { default as Controller } from "./Controller";
export { default as MainContent } from "./MainContent";
export { default as Meta } from "./Meta";
export { default as Numbering } from "./Numbering";
