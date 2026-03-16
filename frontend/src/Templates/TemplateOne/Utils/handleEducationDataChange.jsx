export const handleEducationDataChange = (e, id, data, setFunction) => {
  let newData = data.map((education) => {
    if (education.educationId !== id) {
      return education;
    } else {
      if (e.target.type === "checkbox") {
        const array = checked
          ? education[e.target.name]
            ? [...education[e.target.name], value]
            : [value]
          : education[e.target.name].filter((item) => item !== value);
        const nextData = {
          ...education,
          [e.target.name]: array,
        };
        return nextData;
      } else {
        const nextData = {
          ...education,
          [e.target.name]: e.target.value,
        };
        return nextData;
      }
    }
  });
  setFunction(newData);
};
