import { fetchAuthorisedRoutes } from "../helpers/fetchAuthorisedRoutes";

export const getAllUsers = async () => {
  let url = "http://localhost:3000/api/v1/admin/users";
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
