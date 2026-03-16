import { fetchAuthorisedRoutes } from "../helpers/fetchAuthorisedRoutes";

export const getAllUsers = async () => {
  let url = "https://ruffy-resume-builder.onrender.com/api/v1/admin/users";
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
