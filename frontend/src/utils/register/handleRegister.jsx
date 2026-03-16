export const  handleRegister = async (registerData) => {
  const resposne = await fetch("http://localhost:3000/api/v1/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: registerData.username,
      emailAddress: registerData.emailAddress,
      lastname: registerData.username,
      firstname: registerData.firstname,
      age: registerData.age,
      phoneNumber: registerData.phoneNumber,
      password: registerData.password,
    }),
  });
  const data = await resposne.json();
  return data;
};

