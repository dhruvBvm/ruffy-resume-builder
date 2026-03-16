import { generateId } from "./../Utils/generateId";

export const config = {
  state: {
    personalsDetails: {
      firstName: "",
      lastName: "",
      age: "",
      emailAddress: "",
      jobTarget: "",
      phoneNumber: "",
      optionalNumber: "",
      linkedInUrl: "",
      githubUrl: "",
      birthDate: "",
    },

    optionalsDetails: {
      gender: "",
      personalWebsite: "",
      country: "",
      state: "",
      city: "",
      postalCode: "",
      nationality: "",
      summary: "",
    },

    educationalDetails: [
      {
        id: generateId(),
        degreeName: "",
        collegeName: "",
        startYear: "",
        endYear: "",
        CGPA: "",
        summary: "",
      },
    ],

    projectsDetails: [
      {
        id: generateId(),
        projectName: "",
        projectRole: "",
        projectStartYear: "",
        projectEndYear: "",
        projectDuration: "",
        projectSummary: "",
        techStack: [],
        addTechStack: "",
      },
    ],

    skillsDetails: [
      {
        id: generateId(),
        skillFieldName: "",
        skillsStack: [],
        addSkill: "",
        skillsExperience: "",
        skillLevel: "",
        skillSummary: "",
        isSkillEdit: false,
        skillEditId: null,
      },
    ],
    metaData: {
      resumeName: "",
      resumeType: "",
      resumeDetails: "",
    },
  },

  limitation: {
    educationalDetails: 5,
    projectsDetails: 10,
    skillsDetails: 15,
  },

  schema: {
    educationalDetails: () => ({
      id: generateId(),
      degreeName: "",
      collegeName: "",
      startYear: "",
      endYear: "",
      CGPA: "",
      summary: "",
    }),

    projectsDetails: () => ({
      id: generateId(),
      projectName: "",
      projectRole: "",
      projectStartYear: "",
      projectEndYear: "",
      projectDuration: "",
      projectSummary: "",
      techStack: [],
      addTechStack: "",
    }),

    skillsDetails: () => ({
      id: generateId(),
      skillFieldName: "",
      skillsStack: [],
      skillName: "",
      skillsExperience: "",
      skillLevel: "",
      skillSummary: "",
      isSkillEdit: false,
      skillEditId: null,
    }),
  },

  events: {
    isFormSubmitted: false,
  },

  paths: [
    "/template-one",
    "/template-one/personal-details",
    "/template-one/optional-details",
    "/template-one/educational-details",
    "/template-one/projects-details",
    "/template-one/skills-details",
    "/template-one/confirm",
  ],
  pagesName: [
    "/template-one",
    "personalsDetails",
    "optionalsDetails",
    "educationalDetails",
    "projectsDetails",
    "skillsDetails",
    "metaData",
  ],
};
