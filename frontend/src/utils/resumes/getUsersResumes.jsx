import { fetchAuthorisedRoutes } from "../helpers/fetchAuthorisedRoutes";

export const getUsersResumes = async () => {
  let url = "http://localhost:3000/api/v1/user-resumes";
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
