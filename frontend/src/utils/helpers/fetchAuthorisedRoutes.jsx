export const fetchAuthorisedRoutes = async (url, options) => {
  let refreshUrl = "http://localhost:3000/api/v1/regenerate";
  let refreshOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };
  try {
    const response = await fetch(url, options);
    const actualdata = await response.json();

    if (
      !actualdata.success &&
      actualdata.statusCode === 401 &&
      (actualdata.message === "Token Expired" ||
        actualdata.message === "Authentication Required")
    ) {
      const response = await fetch(refreshUrl, refreshOptions);
      const data = await response.json();

      if (data.statusCode === 200 && data.success && data.data) {
        const response = await fetch(url, options);
        const urlData = await response.json();
        return urlData;
      }else{
        return false
      }
    }
    return actualdata
  } catch (error) {
    return error;
  }
};
