import React, { useCallback, useContext } from "react";
import "./OptionalDetailsForm.scss";
import FormRow from "../../../../../Components/Molecules/FormRow/FormRow";
import FormInput from "../../../../../Components/Molecules/FormInput/FormInput";
import FormRadio from "../../../../../Components/Molecules/FormRadio/FormRadio";
import FormTextArea from "../../../../../Components/Molecules/FormTextArea/FormTextArea";
import { TemplateOneContext } from "../../../TemplateOne";
import { checkErrorStack } from "../../../../../utils/helpers/checkErrorStack";

const OptionalDetailsForm = () => {
  const { state, dispatch } = useContext(TemplateOneContext);

  const handleChange = useCallback((e) => {
    dispatch({
      type: "UPDATE_OBJECTS_DETAILS",
      payload: {
        objectName: "optionalsDetails",
        name: e.target.name,
        value: e.target.value,
        checked: e.target.checked,
      },
    });
  }, []);
  return (
    <form className="optional-details-form" autoComplete="off">
      <FormRow>
        <FormRadio
          name={"gender"}
          values={["Male", "Female", "Others"]}
          checked={state.optionalsDetails.gender}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "gender")
              : false
          }
        />
        <FormInput
          text={"Personal Website"}
          htmlFor={"personalWebsite"}
          type={"text"}
          name="personalWebsite"
          value={state.optionalsDetails.personalWebsite}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "personalWebsite")
              : false
          }
        />
      </FormRow>

      <FormRow>
        <FormInput
          text={"Country"}
          htmlFor={"country"}
          type={"text"}
          name="country"
          value={state.optionalsDetails.country}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "country")
              : false
          }
        />
        <FormInput
          text={"State"}
          htmlFor={"state"}
          type={"text"}
          name="state"
          value={state.optionalsDetails.state}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "state")
              : false
          }
        />
        <FormInput
          text={"City"}
          htmlFor={"city"}
          type={"text"}
          name="city"
          value={state.optionalsDetails.city}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "city")
              : false
          }
        />
      </FormRow>

      <FormRow>
        <FormInput
          text={"Postal Code"}
          htmlFor={"postalCode"}
          type={"number"}
          name="postalCode"
          value={state.optionalsDetails.postalCode}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "postalCode")
              : false
          }
        />
        <FormInput
          text={"Nationality"}
          htmlFor={"nationality"}
          type={"text"}
          name={"nationality"}
          value={state.optionalsDetails.nationality}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "nationality")
              : false
          }
        />
      </FormRow>

      <FormRow>
        <FormTextArea
          text="Professional Summary"
          hint="Briefly describe your experience, education, and key achievements"
          htmlFor="summary"
          name="summary"
          value={state.optionalsDetails.summary}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "summary")
              : false
          }
        />
      </FormRow>
    </form>
  );
};

export default OptionalDetailsForm;
