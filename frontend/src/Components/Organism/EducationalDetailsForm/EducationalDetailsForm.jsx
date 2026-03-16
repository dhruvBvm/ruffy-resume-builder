import React, { useState, useContext } from "react";
import "./EducationalDetailsForm.scss";
import FormRow from "../../Molecules/FormRow/FormRow";
import FormInput from "../../Molecules/FormInput/FormInput";
import FormDropDownMenu from "../../Molecules/FormDropDownMenu/FormDropDownMenu";
import { ResumeData } from "../../Pages/Wizard/Wizard";

const EducationalDetailsForm = () => {
  // const [resumeData.data, setresumeData.data] = useState({
  //   collage: "",
  //   collageCity: "",
  //   degree: "",
  //   collageStartDate: "",
  //   collageEndDate: "",
  //   collageDecription: "",
  //   collageType: "",
  //   cgpa: "",
  // });

  const resumeData = useContext(ResumeData);
  const handleChange = resumeData.handleChange;

  return (
    <form className="educational-details-form" autoComplete="off">
      <FormRow>
        <FormInput
          text={"Collage"}
          htmlFor={"collage-name"}
          type={"text"}
          onChange={handleChange}
          value={resumeData.data.collage}
          name={"collage"}
        />
        <FormInput
          text={"City"}
          htmlFor={"collage-city"}
          type={"text"}
          onChange={handleChange}
          name={"collageCity"}
          value={resumeData.data.collageCity}
        />
        <FormInput
          text={"Degree"}
          htmlFor={"degree"}
          type={"text"}
          onChange={handleChange}
          name={"degree"}
          value={resumeData.data.degree}
        />
      </FormRow>
      <FormRow>
        <FormInput
          text={"Start Date"}
          htmlFor={"age"}
          type={"date"}
          onChange={handleChange}
          name={"collageStartDate"}
          value={resumeData.data.collageStartDate}
        />
        <FormInput
          text={"End Date"}
          htmlFor={"age"}
          type={"date"}
          onChange={handleChange}
          name={"collageEndDate"}
          value={resumeData.data.collageEndDate}
        />
      </FormRow>
      <FormRow>
        <FormDropDownMenu
          name="collageType"
          options={["Goverment", "Private", "Milatry"]}
          onChange={handleChange}
          value={resumeData.data.collageType}
        />
        <FormInput
          name={"cgpa"}
          text={"CGPA"}
          value={resumeData.data.cgpa}
          onChange={handleChange}
          htmlFor={"cgpa"}
          type={"number"}
        />
      </FormRow>
      <FormRow>
        <FormInput
          text={"Descriptions"}
          htmlFor={"collage-description"}
          type={"text"}
          onChange={handleChange}
          name={"collageDecription"}
          value={resumeData.data.collageDecription}
        />
      </FormRow>
    </form>
  );
};

export default EducationalDetailsForm;
