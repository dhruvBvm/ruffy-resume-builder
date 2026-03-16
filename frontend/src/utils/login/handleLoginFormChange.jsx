export const handleLoginFormChange = (e, setLoginData) => {
  setLoginData((prev) => {
    return {
      ...prev,
      [e.target.name]: e.target.value,
    };
  });
};
