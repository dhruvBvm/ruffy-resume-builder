import { validateEducationalFormInfo } from "./validations/validateEducationalFormInfo.mjs";
import { validateMetaDataFormInfo } from "./validations/validateMetaDataFormInfo.mjs";
import { validateOptionalFormInfo } from "./validations/validateOptionalFormInfo.mjs";
import { validatePersonalFormInfo } from "./validations/validatePersonalFormInfo.mjs";
import { validateProjectsFormInfo } from "./validations/validateProjectsForminfo.mjs";
import { validateSkillsFormInfo } from "./validations/validateSkillsFormInfo.mjs";

export const validateResumeBody = (req, res, next) => {
  const formdata = req.body;

  let errorStack = [];

  let personalsDetailsError = validatePersonalFormInfo(
    formdata.personalsDetails,
  );
  let optionalsDetailsError = validateOptionalFormInfo(
    formdata.optionalsDetails,
  );
  let educationalDetailsError = validateEducationalFormInfo(
    formdata.educationalsDetails,
  );
  let projectsDetailsError = validateProjectsFormInfo(formdata.projectsDetails);
  let skillsDetailsError = validateSkillsFormInfo(formdata.skillsDetails);
  let metaDataError = validateMetaDataFormInfo(formdata.metaData);

  errorStack = [
    ...personalsDetailsError,
    ...optionalsDetailsError,
    ...educationalDetailsError,
    ...projectsDetailsError,
    ...skillsDetailsError,
    ...metaDataError,
  ];
  req.errorStack = errorStack;
  next();
};
