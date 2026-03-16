export const deleteUser = async (id) => {
  const result = await fetch(`https://ruffy-resume-builder.onrender.com/api/v1/user/${id}`, {
    method: "DELETE",   
  });
  const response = await result.json();

  if (response.data) {
    return response.data;
  } else {
    throw new Error(response.error);
  }
};
