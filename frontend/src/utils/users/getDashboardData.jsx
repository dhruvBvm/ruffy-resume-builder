import { fetchAuthorisedRoutes } from "../helpers/fetchAuthorisedRoutes";

export const getDashboardData = async () => {
  let url = "https://ruffy-resume-builder.onrender.com/api/v1/user/dashboard";
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
