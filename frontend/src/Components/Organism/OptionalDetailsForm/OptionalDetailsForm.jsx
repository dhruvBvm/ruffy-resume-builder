import React, { useState, useContext } from "react";
import "./OptionalDetailsForm.scss";
import FormRow from "../../Molecules/FormRow/FormRow";
import FormInput from "../../Molecules/FormInput/FormInput";
import FormRadio from "../../Molecules/FormRadio/FormRadio";
import { ResumeData } from "../../Pages/Wizard/Wizard";

const OptionalDetailsForm = () => {
  // const [resumeData.data, setOptionalInfo] = useState({
  //   country: "",
  //   state: "",
  //   city: "",
  //   nationality: "",
  //   postalCode: "",
  //   personalWebsite: "",
  //   gender: "",
  //   batch: "",
  // });

  const resumeData = useContext(ResumeData);
  const handleChange = resumeData.handleChange;

  return (
    <form className="optional-details-form" autoComplete="off">
      <FormRow>
        <FormRadio
          name={"gender"}
          values={["Male", "Female", "Others"]}
          onChange={handleChange}
          checked={resumeData.data.gender}
        />
        <FormInput
          text={"Personal Website"}
          htmlFor={"personalWebsite"}
          type={"text"}
          value={resumeData.data.personalWebsite}
          name="personalWebsite"
          onChange={handleChange}
        />
      </FormRow>

      <FormRow>
        <FormInput
          text={"Country"}
          htmlFor={"country"}
          type={"text"}
          value={resumeData.data.country}
          name="country"
          onChange={handleChange}
        />
        <FormInput
          text={"State"}
          htmlFor={"state"}
          type={"text"}
          value={resumeData.data.state}
          name="state"
          onChange={handleChange}
        />
        <FormInput
          text={"City"}
          htmlFor={"city"}
          type={"text"}
          value={resumeData.data.city}
          name="city"
          onChange={handleChange}
        />
      </FormRow>

      <FormRow>
        <FormInput
          text={"Postal Code"}
          htmlFor={"postal-code"}
          type={"number"}
          name="postalCode"
          value={resumeData.data.postalCode}
          onChange={handleChange}
        />
        <FormInput
          text={"Nationality"}
          htmlFor={"nationality"}
          type={"text"}
          name={"nationality"}
          value={resumeData.data.nationality}
          onChange={handleChange}
        />
      </FormRow>
    </form>
  );
};

export default OptionalDetailsForm;
