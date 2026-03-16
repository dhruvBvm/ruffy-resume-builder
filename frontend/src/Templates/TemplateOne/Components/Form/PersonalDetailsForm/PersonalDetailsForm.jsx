import { useCallback, useContext } from "react";
import FormInput from "../../../../../Components/Molecules/FormInput/FormInput";
import FormRow from "../../../../../Components/Molecules/FormRow/FormRow";
import { TemplateOneContext } from "../../../TemplateOne";
import "./PersonalDetailsForm.scss";
import { checkErrorStack } from "./../../../../../utils/helpers/checkErrorStack";

const PersonalDetailsForm = () => {
  const { state, dispatch } = useContext(TemplateOneContext);

  const handleChange = useCallback((e) => {
    dispatch({
      type: "UPDATE_OBJECTS_DETAILS",
      payload: {
        objectName: "personalsDetails",
        name: e.target.name,
        value: e.target.value,
        checked: e.target.checked,
      },
    });
  }, []);

  return (
    <form className="personal-details-form" autoComplete="off">
      <FormRow>
        <FormInput
          text={"First Name"}
          htmlFor={"firstName"}
          type={"text"}
          name="firstName"
          value={state.personalsDetails.firstName}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "firstName")
              : false
          }
        />
        <FormInput
          text={"Last Name"}
          htmlFor={"lastName"}
          type={"text"}
          name="lastName"
          value={state.personalsDetails.lastName}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "lastName")
              : false
          }
        />
        <FormInput
          text={"Age"}
          htmlFor={"age"}
          type={"number"}
          name="age"
          value={state.personalsDetails.age}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "age")
              : false
          }
        />
      </FormRow>

      <FormRow>
        <FormInput
          text={"Email Address"}
          htmlFor={"emailAddress"}
          type={"email"}
          name="emailAddress"
          value={state.personalsDetails.emailAddress}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "emailAddress")
              : false
          }
        />
        <FormInput
          text={"Job Target"}
          htmlFor={"jobTarget"}
          type={"text"}
          name="jobTarget"
          value={state.personalsDetails.jobTarget}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "jobTarget")
              : false
          }
        />
      </FormRow>

      <FormRow>
        <FormInput
          text={"Phone Number"}
          htmlFor={"phoneNumber"}
          type={"text"}
          name="phoneNumber"
          value={state.personalsDetails.phoneNumber}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "phoneNumber")
              : false
          }
        />
        <FormInput
          text={"Optional Number"}
          htmlFor={"optionalNumber"}
          type={"text"}
          name="optionalNumber"
          value={state.personalsDetails.optionalNumber}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "optionalNumber")
              : false
          }
        />
      </FormRow>

      <FormRow>
        <FormInput
          text={"LinkedIn URL"}
          htmlFor={"linkedInUrl"}
          type={"text"}
          name="linkedInUrl"
          value={state.personalsDetails.linkedInUrl}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "linkedInUrl")
              : false
          }
        />
        <FormInput
          text={"Github URL"}
          htmlFor={"githubUrl"}
          type={"text"}
          name="githubUrl"
          value={state.personalsDetails.githubUrl}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "githubUrl")
              : false
          }
        />
        <FormInput
          text={"Birth Date"}
          htmlFor={"birthDate"}
          type={"date"}
          name="birthDate"
          value={state.personalsDetails.birthDate}
          onChange={(e) => {
            handleChange(e);
          }}
          warn={
            state.isPageSubmitted
              ? checkErrorStack(state.errorStack, "birthDate")
              : false
          }
        />
      </FormRow>
    </form>
  );
};

export default PersonalDetailsForm;
