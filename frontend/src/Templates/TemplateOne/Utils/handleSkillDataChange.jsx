export const handleSkillDataChange = (e, id, data, setFunction) => {
  let newData = data.map((skill) => {
    if (skill.skillId !== id) {
      return skill;
    } else {
      if (e.target.type === "checkbox") {
        const array = checked
          ? skill[e.target.name]
            ? [...skill[e.target.name], value]
            : [value]
          : skill[e.target.name].filter((item) => item !== value);
        const nextData = {
          ...skill,
          [e.target.name]: array,
        };
        return nextData;
      } else {
        const nextData = {
          ...skill,
          [e.target.name]: e.target.value,
        };
        return nextData;
      }
    }
  });
  setFunction(newData);
};
