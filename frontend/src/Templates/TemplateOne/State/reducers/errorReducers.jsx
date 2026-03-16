import { validateConfirmForm } from "../validations/validateConfirmForm";
import { validateEducationalFormInfo } from "../validations/validateEducationalFormInfo";
import { validateOptionalFormInfo } from "../validations/validateOptionalFormInfo";
import { validatePersonalFormInfo } from "../validations/validatePersonalFormInfo";
import { validateProjectsFormInfo } from "../validations/validateProjectsForminfo";
import { validateSkillsFormInfo } from "../validations/validateSkillsFormInfo";

const helpers = {
  personalsDetails: validatePersonalFormInfo,
  optionalsDetails: validateOptionalFormInfo,
  educationalDetails: validateEducationalFormInfo,
  projectsDetails: validateProjectsFormInfo,
  skillsDetails: validateSkillsFormInfo,
  metaData: validateConfirmForm,
};

export const checkErrors = (state, payload) => {
  const { formName } = payload;
  const helper = helpers[formName];
  const newErrorStack = helper ? helper(state[formName]) : [];
  return {
    ...state,
    errorStack: newErrorStack,
  };
};
