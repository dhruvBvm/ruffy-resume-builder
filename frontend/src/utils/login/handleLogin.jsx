export const handleLogin = async (loginData) => {
  if (
    loginData.username &&
    loginData.password &&
    loginData.username.length > 7 &&
    loginData.password.length >= 8
  ) {
    const response = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } else {
    return false;
  }
};
