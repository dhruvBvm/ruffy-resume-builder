import * as formHandlers from "./reducers/formReducers";
import * as inputHandlers from "./reducers/inputReducers";
import * as uiHandlers from "./reducers/uiReducers";
import * as errorHandlers from "./reducers/errorReducers";
import * as resetHandlers from "./reducers/resetReducers";
import * as resumeHandlers from "./reducers/resumeReducers";

const handlers = {
  // Wizard reducers...
  ADD_FORM: formHandlers.addForm,
  REMOVE_FORM: formHandlers.removeForm,

  // Handle add sub stack reducers...
  ADD_TECH_STACK: formHandlers.addTechStack,
  REMOVE_TECH_STACK: formHandlers.removeTechStack,
  ADD_SKILL_STACK: formHandlers.addSkills,
  REMOVE_SKILL_STACK: formHandlers.deleteSkills,
  EDIT_SKILL_STACK: formHandlers.editSkills,
  SET_FORM_SUBMITTED: formHandlers.setFormSubmitted,

  // Handle Change reducers...
  UPDATE_OBJECTS_DETAILS: inputHandlers.handleObjectChange,
  UPDATE_ARRAY_OF_OBJECTS_DETAILS: inputHandlers.handleArrayChange,

  // Wizard Navigation Reducers
  NEXT_PAGE: uiHandlers.handleNext,
  PREV_PAGE: uiHandlers.handlePrev,

  // Error Reducers
  CHECK_ERROR: errorHandlers.checkErrors,

  // Reset Reducers
  UPDATE_PAGE_SUBMITTED: resetHandlers.updatePageSubmitted,

  // Resume Reducers
  UPLOAD_RESUME_DATA: resumeHandlers.uploadResume,
};

export const templateOneReducer = (state, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action.payload) : state;
};
