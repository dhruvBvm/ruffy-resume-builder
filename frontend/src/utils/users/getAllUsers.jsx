export const getAllUsers = async () => {
  const result = await fetch("http://localhost:3000/api/v1/users");
  const response = await result.json();

  if (response.data) {
    return response.data;
  } else {
    throw new Error(response.error);
  }
};
