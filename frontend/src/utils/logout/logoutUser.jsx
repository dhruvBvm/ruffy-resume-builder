import { fetchAuthorisedRoutes } from "../helpers/fetchAuthorisedRoutes";

export const logoutUser = async () => {
  let url = "http://localhost:3000/api/v1/logout";
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  const data = await fetchAuthorisedRoutes(url, options);
  return data;
};
