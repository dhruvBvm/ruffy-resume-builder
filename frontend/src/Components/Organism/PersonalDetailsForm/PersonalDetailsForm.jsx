import React, { useState, useContext } from "react";
import "./PersonalDetailsForm.scss";
import FormRow from "../../Molecules/FormRow/FormRow";
import FormInput from "../../Molecules/FormInput/FormInput";

import { ResumeData } from "../../Pages/Wizard/Wizard";

const PersonalDetailsForm = () => {

  return (
    <form className="personal-details-form " autoComplete="off">
      <FormRow>
        <FormInput
          text={"First Name"}
          htmlFor={"first-name"}
          type={"text"}
          value={resumeData.data.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <FormInput
          text={"Last Name"}
          htmlFor={"Last-name"}
          type={"text"}
          value={resumeData.data.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <FormInput
          text={"Age"}
          htmlFor={"age"}
          type={"number"}
          value={resumeData.data.age}
          name="age"
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <FormInput
          text={"Email Address"}
          htmlFor={"email"}
          type={"email"}
          value={resumeData.data.email}
          name="email"
          onChange={handleChange}
        />
        <FormInput
          text={"Job Target"}
          htmlFor={"job-target"}
          type={"text"}
          value={resumeData.data.jobTarget}
          name="jobTarget"
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <FormInput
          text={"Phone Number"}
          htmlFor={"mobile-number"}
          type={"number"}
          value={resumeData.data.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
        />
        <FormInput
          text={"Optional Number"}
          htmlFor={"optional-number"}
          type={"number"}
          value={resumeData.data.optionalNumber}
          name="optionalNumber"
          onChange={handleChange}
        />
      </FormRow>

      <FormRow>
        <FormInput
          text={"LinkedIn URL"}
          htmlFor={"linkedIn-url"}
          type={"text"}
          value={resumeData.data.linkedInURL}
          name="linkedInURL"
          onChange={handleChange}
        />
        <FormInput
          text={"Github URL"}
          htmlFor={"github-url"}
          type={"text"}
          value={resumeData.data.githubURL}
          name="githubURL"
          onChange={handleChange}
        />
        <FormInput
          text={"Birth Date"}
          htmlFor={"birth-date"}
          type={"date"}
          value={resumeData.data.birthDate}
          name="birthDate"
          onChange={handleChange}
        />
      </FormRow>
    </form>
  );
};

export default PersonalDetailsForm;
