export const handleChange = (e, setFunction, fieldName) => {
  const { name, value, checked, type } = e.target;
  setFunction((prev) => {
    if (type === "checkbox") {
      const array = checked
        ? prev[fieldName][name]
          ? [...prev[fieldName][name], value]
          : [value]
        : prev[fieldName][name].filter((item) => item !== value);
      return {
        ...prev,
        [fieldName]: {
          ...prev[fieldName],
          [name]: array,
        },
      };
    } else {
      return {
        ...prev,
        [fieldName]: {
          ...prev[fieldName],
          [name]: value,
        },
      };
    }
  });
};

export const addForm = (setTemplateData, fieldName) => {
  setTemplateData((prev) => {
    if (prev[fieldName].length < prev.limitation[fieldName]) {
      return {
        ...prev,
        [fieldName]: [
          ...prev[fieldName],
          {
            ...prev.schema[fieldName],
            id: Date.now() + Math.floor(Math.random() * 100),
          },
        ],
      };
    } else {
      return {
        ...prev,
      };
    }
  });
};

export const removeForm = (setTemplateData, fieldName, id) => {
  setTemplateData((prev) => {
    return {
      ...prev,
      [fieldName]: prev[fieldName].filter((item) => item.id !== id),
    };
  });
};

export const changeArrays = (e, setTemplateData, fieldName, id) => {
  const { name, value, checked } = e.target;
  setTemplateData((prev) => {
    return {
      ...prev,
      [fieldName]: prev[fieldName].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [name]: value,
          };
        } else {
          return item;
        }
      }),
    };
  });
};

export const handleAddTechStack = (setTemplateData, id) => {
  setTemplateData((prev) => {
    return {
      ...prev,
      ["projectsDetails"]: prev["projectsDetails"].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ["techStack"]: [
              ...item["techStack"],
              prev["subState"].addTechStack,
            ],
          };
        } else {
          return item;
        }
      }),
    };
  });
  setTemplateData((prev) => {
    return {
      ...prev,
      ["subState"]: {
        ...prev["subState"],
        addTechStack: "",
      },
    };
  });
};

export const removeTechStack = (setTemplateData, id, techName) => {
  setTemplateData((prev) => {
    return {
      ...prev,
      ["projectsDetails"]: prev["projectsDetails"].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ["techStack"]: item.techStack.filter((tech) => tech !== techName),
          };
        } else {
          return item;
        }
      }),
    };
  });
};

export const handleAddSkill = (setTemplateData, id) => {
  setTemplateData((prev) => {
    if (prev.subState.isSkillEdit) {
      return {
        ...prev,
        ["skillsDetails"]: prev["skillsDetails"].map((item) => {
          if (item.id === id) {
            return {
              ...item,
              ["skillsStack"]: item["skillsStack"].map((skill) => {
                if (skill.id === prev.subState.skillEditId) {
                  return {
                    id: skill.id,
                    skillName: prev.subState.skillName,
                    skillsExperience: prev.subState.skillsExperience,
                    skillLevel: prev.subState.skillLevel,
                  };
                } else {
                  return skill;
                }
              }),
            };
          } else {
            return item;
          }
        }),
      };
    } else {
      return {
        ...prev,
        ["skillsDetails"]: prev["skillsDetails"].map((item) => {
          if (item.id === id) {
            return {
              ...item,
              ["skillsStack"]: [
                ...item["skillsStack"],
                {
                  id: Date.now() + Math.floor(Math.random() * 100),
                  skillName: prev.subState.skillName,
                  skillsExperience: prev.subState.skillsExperience,
                  skillLevel: prev.subState.skillLevel,
                },
              ],
            };
          } else {
            return item;
          }
        }),
      };
    }
  });
  setTemplateData((prev) => {
    return {
      ...prev,
      ["subState"]: {
        ...prev["subState"],
        skillName: "",
        skillsExperience: "",
        skillLevel: "",
        isSkillEdit: false,
      },
    };
  });
};

export const handleDeleteSkill = (setTemplateData, id, skillId) => {
  setTemplateData((prev) => {
    return {
      ...prev,
      ["skillsDetails"]: prev["skillsDetails"].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ["skillsStack"]: item["skillsStack"].filter(
              (skill) => skill.id !== skillId,
            ),
          };
        } else {
          return item;
        }
      }),
    };
  });
};

export const handleSetEditSkiil = (setTemplateData, skillData) => {
  setTemplateData((prev) => {
    return {
      ...prev,
      ["subState"]: {
        ...prev["subState"],
        isSkillEdit: true,
        skillName: skillData.skillName,
        skillsExperience: skillData.skillsExperience,
        skillLevel: skillData.skillLevel,
        skillEditId: skillData.id,
      },
    };
  });
};
