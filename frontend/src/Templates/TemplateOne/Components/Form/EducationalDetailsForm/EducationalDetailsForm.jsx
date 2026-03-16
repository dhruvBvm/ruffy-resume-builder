import React, { useCallback, useContext } from "react";
import "./EducationalDetailsForm.scss";
import FormRow from "../../../../../Components/Molecules/FormRow/FormRow";
import FormInput from "../../../../../Components/Molecules/FormInput/FormInput";
import FormTextArea from "../../../../../Components/Molecules/FormTextArea/FormTextArea";
import Button from "../../../../../Components/Molecules/Button/Button";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { TemplateOneContext } from "../../../TemplateOne";
import { checkArrayErrorStack } from "../../../../../utils/helpers/checkArrayErrorStack";

const EducationalDetailsForm = ({ education }) => {
  const { state, dispatch } = useContext(TemplateOneContext);

  const handleRemove = useCallback(
    (id = education.id) => {
      dispatch({
        type: "REMOVE_FORM",
        payload: {
          objectName: "educationalDetails",
          id: id,
        },
      });
    },
    [dispatch, education.id],
  );

  const handleChange = useCallback(
    (e, id = education.id) => {
      dispatch({
        type: "UPDATE_ARRAY_OF_OBJECTS_DETAILS",
        payload: {
          name: e.target.name,
          value: e.target.value,
          objectName: "educationalDetails",
          id: id,
        },
      });
    },
    [dispatch, education.id],
  );

  return (
    <>
      <form className="educational-details-form " autoComplete="off">
        <div className="education-details">
          <h1 className="collage-header">Education Details</h1>
          {state.educationalDetails.length > 1 && (
            <Button onClick={handleRemove}>
              <IoRemoveCircleSharp />
              Remove education
            </Button>
          )}
        </div>
        <FormRow>
          <FormInput
            text={"Degree Name | Course Name"}
            htmlFor={"degreeName"}
            type={"text"}
            value={education.degreeName}
            name="degreeName"
            onChange={(e) => {
              handleChange(e);
            }}
            warn={
              state.isPageSubmitted
                ? checkArrayErrorStack(
                    state.errorStack,
                    "degreeName",
                    education.id,
                  )
                : false
            }
          />
          <FormInput
            text={"Collage Name | School Name"}
            htmlFor={"collegeName"}
            type={"text"}
            value={education.collegeName}
            name="collegeName"
            onChange={(e) => {
              handleChange(e);
            }}
            warn={
              state.isPageSubmitted
                ? checkArrayErrorStack(
                    state.errorStack,
                    "collegeName",
                    education.id,
                  )
                : false
            }
          />
        </FormRow>
        <FormRow>
          <FormInput
            text={"Start Year"}
            htmlFor={"startYear"}
            type={"number"}
            value={education.startYear}
            name="startYear"
            onChange={(e) => {
              handleChange(e);
            }}
            warn={
              state.isPageSubmitted
                ? checkArrayErrorStack(
                    state.errorStack,
                    "startYear",
                    education.id,
                  )
                : false
            }
          />
          <FormInput
            text={"Passed Year"}
            htmlFor={"endYear"}
            type={"number"}
            value={education.endYear}
            name="endYear"
            onChange={(e) => {
              handleChange(e);
            }}
            warn={
              state.isPageSubmitted
                ? checkArrayErrorStack(
                    state.errorStack,
                    "endYear",
                    education.id,
                  )
                : false
            }
          />
          <FormInput
            text={"CGPA"}
            htmlFor={"CGPA"}
            type={"number"}
            value={education.CGPA}
            name="CGPA"
            onChange={(e) => {
              handleChange(e);
            }}
            warn={
              state.isPageSubmitted
                ? checkArrayErrorStack(state.errorStack, "CGPA", education.id)
                : false
            }
          />
        </FormRow>

        <FormRow>
          <FormTextArea
            text="Education Summary"
            hint="Briefly describe your education experience, and key achievements"
            htmlFor="summary"
            name="summary"
            value={education.summary}
            onChange={(e) => {
              handleChange(e);
            }}
            warn={
              state.isPageSubmitted
                ? checkArrayErrorStack(
                    state.errorStack,
                    "summary",
                    education.id,
                  )
                : false
            }
          />
        </FormRow>
      </form>
    </>
  );
};

export default EducationalDetailsForm;
