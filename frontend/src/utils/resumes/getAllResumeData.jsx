import { fetchAuthorisedRoutes } from "../helpers/fetchAuthorisedRoutes";

export const getAllResumes = async () => {
  let url = "https://ruffy-resume-builder.onrender.com/api/v1/resumes";
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  const data = await fetchAuthorisedRoutes(url, options);
  return data;
};
