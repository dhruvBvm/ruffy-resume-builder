export const handleProjectsDataChange = (e, id, data, setFunction) => {
  let newData = data.map((project) => {
    if (project.projectId !== id) {
      return project;
    } else {
      if (e.target.type === "checkbox") {
        const array = checked
          ? project[e.target.name]
            ? [...project[e.target.name], value]
            : [value]
          : project[e.target.name].filter((item) => item !== value);
        const nextData = {
          ...project,
          [e.target.name]: array,
        };
        return nextData;
      } else {
        const nextData = {
          ...project,
          [e.target.name]: e.target.value,
        };
        return nextData;
      }
    }
  });
  setFunction(newData);
};
