import { fetchAuthorisedRoutes } from "../helpers/fetchAuthorisedRoutes";

export const editResume = async (id) => {
  let url = `https://ruffy-resume-builder.onrender.com/api/v1/resume/${id}`;
  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  const data = await fetchAuthorisedRoutes(url, options);
  return data;
};
