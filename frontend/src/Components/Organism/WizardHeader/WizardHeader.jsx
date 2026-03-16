import React from "react";
import "./WizardHeader.scss";

const WizardHeader = () => {  
  return (
    <div className="wizard-header">
      <div className="wizard-header__step active">
        <div>1</div>
        <div>
          <span>Personal Info</span>
        </div>
      </div>
      <div className="wizard-header__line active"></div>
      <div className="wizard-header__step active">
        <div>2</div>
        <div>
          <span>Optional Info</span>
        </div>
      </div>
      <div className="wizard-header__line active"></div>
      <div className="wizard-header__step active">
        <div>3</div>
        <div>
          <span>Educational Info</span>
        </div>
      </div>
      <div className="wizard-header__line active"></div>
      <div className="wizard-header__step active">
        <div>4</div>
        <div>
          <span>Profile Info</span>
        </div>
      </div>
    </div>
  );
};

export default WizardHeader;
