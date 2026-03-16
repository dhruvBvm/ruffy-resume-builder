export const setAllResumes = (state, payload) => {
  const { resumes } = payload;
  return {
    ...state,
    allResumes: resumes,
  };
};

export const setUserResumes = (state, payload) => {
  const { resumes } = payload;
  return {
    ...state,
    userResumes: resumes,
  };
};
