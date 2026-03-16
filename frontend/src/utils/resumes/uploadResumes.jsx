import { fetchAuthorisedRoutes } from "../helpers/fetchAuthorisedRoutes";

export const uploadResumes = async (state) => {
  let url = "https://ruffy-resume-builder.onrender.com/api/v1/resume";
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalsDetails: state.personalsDetails,
      optionalsDetails: state.optionalsDetails,
      educationalsDetails: state.educationalDetails,
      projectsDetails: state.projectsDetails,
      skillsDetails: state.skillsDetails,
      metaData: state.metaData,
    }),
    credentials: "include",
  };
  const data = await fetchAuthorisedRoutes(url, options);
  return data;
};
