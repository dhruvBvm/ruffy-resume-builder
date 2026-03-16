export const state = {
  personalsDetails: {
    firstname: "",
    lastname: "",
    age: "",
    email: "",
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
  educationalsDetails: [
    {
      id: Date.now() + Math.floor(Math.random() * 100000000),
      degreeName: "",
      collageName: "",
      startYear: "",
      endYear: "",
      cgpa: "",
      summary: "",
    },
  ],
  projectsDetails: [
    {
      id: Date.now() + Math.floor(Math.random() * 100000000),
      projectName: "",
      projectRole: "",
      projectStartYear: "",
      projectEndYear: "",
      projectDuration: "",
      projectSummary: "",
      techStack: [],
    },
  ],
  skillsDetails: [
    {
      id: Date.now() + Math.floor(Math.random() * 100000000),
      skillFieldName: "",
      skillsStack: [],
      skillSummary: "",
    },
  ],

  limitation: {
    educationalsDetails: 5,
    projectsDetails: 10,
    skillsDetails: 15,
  },

  schema: {
    educationalsDetails: {
      id: Date.now() + Math.floor(Math.random() * 100000000),
      degreeName: "",
      collageName: "",
      startYear: "",
      endYear: "",
      cgpa: "",
      summary: "",
    },

    projectsDetails: {
      id: Date.now() + Math.floor(Math.random() * 100000000),
      projectName: "",
      projectRole: "",
      projectStartYear: "",
      projectEndYear: "",
      projectDuration: "",
      projectSummary: "",
      techStack: [],
    },

    skillsDetails: {
      id: Date.now() + Math.floor(Math.random() * 100000000),
      skillFieldName: "",
      skillsStack: [],
      skillSummary: "",
    },
  },

  subState: {
    addTechStack: "",
    skillName: "",
    skillsExperience: "",
    skillLevel: "",
    isSkillEdit: false,
    skillEditId: null,
  },
  events: {
    isFormSubmitted: false,
  },
};
