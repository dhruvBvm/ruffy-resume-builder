import { fetchAuthorisedRoutes } from "../helpers/fetchAuthorisedRoutes";

export const getAuthStatus = async () => {
  let url = "http://localhost:3000/api/v1/authStatus";
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
