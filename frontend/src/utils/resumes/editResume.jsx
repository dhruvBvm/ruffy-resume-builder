import { fetchAuthorisedRoutes } from "../helpers/fetchAuthorisedRoutes";

export const editResume = async (id) => {
  let url = `http://localhost:3000/api/v1/resume/${id}`;
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
