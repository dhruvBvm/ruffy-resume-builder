export const getAllUsers = async () => {
  const result = await fetch("https://ruffy-resume-builder.onrender.com/api/v1/users");
  const response = await result.json();

  if (response.data) {
    return response.data;
  } else {
    throw new Error(response.error);
  }
};
