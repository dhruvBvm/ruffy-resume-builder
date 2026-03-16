import { config as baseData } from "./config";

export const initialState = {
  ...structuredClone(baseData.state),
  pageNumber: 1,
  errorStack: [],
  isFormSubmitted: false,
  isPageSubmitted: false,
  isEditing: false,
};
