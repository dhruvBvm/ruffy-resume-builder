import React, { useContext, useState } from "react";
import "./WizardFooter.scss";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../../Molecules/Button/Button";

const WizardFooter = ({ handleNext, handlePrev, isFirstStep, isLastStep }) => {
  return (
    <div className="wizard-footer">
      {isFirstStep ? (
        <Button onClick={handlePrev}>
          <FaArrowLeftLong />
          <span>Go to the home page</span>
        </Button>
      ) : (
        <Button onClick={handlePrev}>
          <FaArrowLeftLong />
          <span>Go Back</span>
        </Button>
      )}

      {isLastStep ? (
        <Button onClick={handleNext}>
          <span>Submit the Form</span>
          <FaArrowRightLong />
        </Button>
      ) : (
        <Button onClick={handleNext}>
          <span>Save and Continue</span>
          <FaArrowRightLong />
        </Button>
      )}
    </div>
  );
};

export default WizardFooter;
