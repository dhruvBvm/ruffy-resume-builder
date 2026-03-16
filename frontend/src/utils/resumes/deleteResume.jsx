import { fetchAuthorisedRoutes } from "../helpers/fetchAuthorisedRoutes";

export const deleteResume = async (id) => {
  let url = `https://ruffy-resume-builder.onrender.com/api/v1/resume/${id}`;
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  const data = await fetchAuthorisedRoutes(url, options);
  return data;
};
