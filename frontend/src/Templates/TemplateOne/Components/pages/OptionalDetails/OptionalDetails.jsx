import React, { useContext, useState } from "react";
import "./OptionalDetails.scss";
import OptionalDetailsForm from "../../Form/OptionalDetailsForm/OptionalDetailsForm";
import { TemplateOneContext } from "../../../TemplateOne";

const OptionalDetails = () => {
  return (
    <div className="optional-details">
      <h3>Fill your Optional Details</h3>
      <p>
        Help us build your best resume yet! Providing these extra details allows
        our AI to better customize your layout and ensure you meet specific
        regional hiring requirements. Don't worry—your data is safe with us. We
        use industry-leading security protocols to protect your information, and
        we never share your personal details with third parties without your
        consent.
      </p>
      <a href="" className="optional-details__policy">
        How we will use your information
      </a>
      <OptionalDetailsForm />
    </div>
  );
};

export default OptionalDetails;
