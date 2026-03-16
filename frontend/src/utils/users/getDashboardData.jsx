import { fetchAuthorisedRoutes } from "../helpers/fetchAuthorisedRoutes";

export const getDashboardData = async () => {
  let url = "http://localhost:3000/api/v1/user/dashboard";
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
