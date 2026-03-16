import { config } from "../config";

const { paths } = config;

export const handleNext = (state, payload) => {
  if (state.pageNumber <= paths.length) {
    return {
      ...state,
      pageNumber:
        state.errorStack.length > 0 ? state.pageNumber : state.pageNumber + 1,
      isPageSubmitted: true,
    };
  }
};

export const handlePrev = (state, payload) => {
  if (state.pageNumber > 1) {
    return {
      ...state,
      pageNumber: state.pageNumber - 1,
    };
  }
};
