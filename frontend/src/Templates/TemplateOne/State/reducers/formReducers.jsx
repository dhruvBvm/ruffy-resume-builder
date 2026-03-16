import { PiSpeakerSimpleSlashLight } from "react-icons/pi";
import { generateId } from "../../Utils/generateId";
import { config } from "../config";

export const addForm = (state, payload) => {
  const { objectName } = payload;
  if (!state[objectName]) return state;
  if (state[objectName].length >= config.limitation[objectName]) {
    return state;
  }
  return {
    ...state,
    [objectName]: [...state[objectName], config.schema[objectName]()],
  };
};

export const removeForm = (state, payload) => {
  const { objectName, id } = payload;
  if (!state[objectName]) return state;
  if (state[objectName].length <= 1) return state;
  return {
    ...state,
    [objectName]: state[objectName].filter((form) => form.id !== id),
  };
};

export const addTechStack = (state, payload) => {
  const { id } = payload;
  return {
    ...state,
    ["projectsDetails"]: state["projectsDetails"].map((project) => {
      if (project.id === id) {
        return {
          ...project,
          ["techStack"]: [...project["techStack"], project["addTechStack"]],
          ["addTechStack"]: "",
        };
      } else {
        return project;
      }
    }),
    ["subState"]: {
      ...state["subState"],
      ["addTechStack"]: "",
    },
  };
};

export const removeTechStack = (state, payload) => {
  const { id, stackName } = payload;
  return {
    ...state,
    ["projectsDetails"]: state["projectsDetails"].map((project) => {
      if (project.id === id) {
        return {
          ...project,
          ["techStack"]: project["techStack"].filter(
            (stack) => stack !== stackName,
          ),
        };
      } else {
        return project;
      }
    }),
  };
};

export const addSkills = (state, payload) => {
  const { id } = payload;
  return {
    ...state,
    ["skillsDetails"]: state["skillsDetails"].map((skills) => {
      if (skills.id === id) {
        return {
          ...skills,
          ["skillsStack"]: skills["isSkillEdit"]
            ? skills["skillsStack"].map((skill) => {
                if (skill.id === skills["skillEditId"]) {
                  return {
                    id: skill.id,
                    skillsExperience: skills.skillsExperience,
                    skillLevel: skills.skillLevel,
                    skillName: skills.skillName,
                  };
                } else {
                  return skill;
                }
              })
            : [
                ...skills["skillsStack"],
                {
                  id: generateId(),
                  skillsExperience: skills.skillsExperience,
                  skillLevel: skills.skillLevel,
                  skillName: skills.skillName,
                },
              ],
          skillsExperience: "",
          skillLevel: "",
          skillName: "",
          isSkillEdit: false,
          skillEditId: null,
        };
      } else {
        return skills;
      }
    }),
  };
};

export const deleteSkills = (state, payload) => {
  const { id, deleteId } = payload;
  return {
    ...state,
    ["skillsDetails"]: state["skillsDetails"].map((skills) => {
      if (skills.id === id) {
        return {
          ...skills,
          ["skillsStack"]: skills["skillsStack"].filter(
            (skill) => skill.id !== deleteId,
          ),
        };
      } else {
        return skills;
      }
    }),
  };
};

export const editSkills = (state, payload) => {
  const { id, editId } = payload;

  return {
    ...state,
    ["skillsDetails"]: state["skillsDetails"].map((skills) => {
      if (skills.id === id) {
        return {
          ...skills,
          ["isSkillEdit"]: true,
          ["skillEditId"]: editId,
          skillName: skills["skillsStack"].find((skill) => skill.id === editId)
            .skillName,
          skillsExperience: skills["skillsStack"].find(
            (skill) => skill.id === editId,
          ).skillsExperience,
          skillLevel: skills["skillsStack"].find((skill) => skill.id === editId)
            .skillLevel,
        };
      } else {
        return skills;
      }
    }),
  };
};

export const setFormSubmitted = (state, payload) => {
  return {
    ...state,
    isPageSubmitted: true,
  };
};
