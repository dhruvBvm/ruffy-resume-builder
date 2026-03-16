export const handleRegisterFormChange = (e, setRegisterData) => {
  const { checked, name, value } = e.target;
  setRegisterData((prev) => {
    if (e.target.type === "checkbox") {
      const array = checked
        ? prev[name]
          ? [...prev[name], value]
          : [value]
        : prev[name].filter((item) => item !== value);
      const nextData = {
        ...prev,
        [e.target.name]: array,
      };
      return nextData;
    } else {
      const nextData = {
        ...prev,
        [e.target.name]: e.target.value,
      };
      return nextData;
    }
  });
};
