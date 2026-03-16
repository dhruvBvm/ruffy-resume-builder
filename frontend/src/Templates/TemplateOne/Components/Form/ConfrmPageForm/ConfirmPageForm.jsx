import React, { useCallback, useContext } from "react";
import "./ConfirmPageForm.scss";
import FormRow from "../../../../../Components/Molecules/FormRow/FormRow";
import FormInput from "../../../../../Components/Molecules/FormInput/FormInput";
import { TemplateOneContext } from "../../../TemplateOne";
import { checkArrayErrorStack } from "../../../../../utils/helpers/checkArrayErrorStack";
import FormDropDownMenu from "../../../../../Components/Molecules/FormDropDownMenu/FormDropDownMenu";
import FormTextArea from "../../../../../Components/Molecules/FormTextArea/FormTextArea";
import { checkErrorStack } from "../../../../../utils/helpers/checkErrorStack";

const ConfirmPageForm = () => {
  const { state, dispatch } = useContext(TemplateOneContext);

  const handleChange = useCallback(
    (e) => {
      dispatch({
        type: "UPDATE_OBJECTS_DETAILS",
        payload: {
          objectName: "metaData",
          name: e.target.name,
          value: e.target.value,
          checked: e.target.checked,
        },
      });
    },
    [dispatch],
  );
  return (
    <form className="confirm-form" autoComplete="off">
      <div className="confirm-details">
        <FormRow>
          <FormInput
            text={"Name Your Resume"}
            htmlFor={"resumeName"}
            type={"text"}
            value={state.metaData.resumeName}
            name="resumeName"
            onChange={(e) => {
              handleChange(e);
            }}
            warn={
              state.isPageSubmitted
                ? checkErrorStack(state.errorStack, "resumeName")
                : false
            }
          />
        </FormRow>
        <FormRow>
          <FormDropDownMenu
            name={"resumeType"}
            options={["Private", "Public"]}
            value={state.metaData.resumeType}
            onChange={handleChange}
            warn={
              state.isPageSubmitted
                ? checkErrorStack(state.errorStack, "resumeType")
                : false
            }
          />
        </FormRow>
        <FormRow>
          <FormTextArea
            text="Resume Summary"
            hint="Briefly describe your Resume."
            htmlFor="resumeDetails"
            name="resumeDetails"
            value={state.metaData.resumeDetails}
            onChange={(e) => {
              handleChange(e);
            }}
            warn={
              state.isPageSubmitted
                ? checkErrorStack(state.errorStack, "resumeDetails")
                : false
            }
          />
        </FormRow>
      </div>
    </form>
  );
};

export default ConfirmPageForm;
