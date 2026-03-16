export const validateProjectsFormInfo = (formData) => {
  let errorStack = [];

  formData.forEach((element) => {
    const {
      id,
      projectName,
      projectRole,
      techStack,
      projectStartYear,
      projectEndYear,
      projectDuration,
      projectSummary,
    } = element;

    // Project Name
    if (projectName.trim() === "") {
      errorStack.push({
        id: id,
        fieldName: "projectName",
        error: { warn: true, message: "Project Name can't be empty." },
      });
    }
    if (projectName.trim().length < 3) {
      errorStack.push({
        id: id,
        fieldName: "projectName",
        error: {
          warn: true,
          message: "Project Name must be at least 3 characters.",
        },
      });
    }
    if (projectName.trim().length > 100) {
      errorStack.push({
        id: id,
        fieldName: "projectName",
        error: {
          warn: true,
          message: "Project Name cannot exceed 100 characters.",
        },
      });
    }

    // Your Role
    if (projectRole.trim() === "") {
      errorStack.push({
        id: id,
        fieldName: "projectRole",
        error: { warn: true, message: "Project Role can't be empty." },
      });
    }
    if (projectRole.trim().length > 60) {
      errorStack.push({
        id: id,
        fieldName: "projectRole",
        error: {
          warn: true,
          message: "Project Role cannot exceed 60 characters.",
        },
      });
    }

    // Tech Stack
    if (techStack.length === 0) {
      errorStack.push({
        id: id,
        fieldName: "addTechStack",
        error: { warn: true, message: "Please add at least one Tech Stack." },
      });
    }
    if (techStack.length > 15) {
      errorStack.push({
        id: id,
        fieldName: "addTechStack",
        error: {
          warn: true,
          message: "Maximum 15 tech stacks allowed per project.",
        },
      });
    }

    // Start & End Year
    const currentYear = new Date().getFullYear();
    if (projectStartYear === "" || projectStartYear === 0) {
      errorStack.push({
        id: id,
        fieldName: "projectStartYear",
        error: { warn: true, message: "Start Year is required." },
      });
    }
    if (projectStartYear > currentYear + 5) {
      errorStack.push({
        id: id,
        fieldName: "projectStartYear",
        error: { warn: true, message: "Invalid start year." },
      });
    }

    if (projectEndYear === "" || projectEndYear === 0) {
      errorStack.push({
        id: id,
        fieldName: "projectEndYear",
        error: { warn: true, message: "End Year is required." },
      });
    }
    if (
      Number(projectStartYear) > Number(projectEndYear) &&
      projectEndYear !== ""
    ) {
      errorStack.push({
        id: id,
        fieldName: "projectEndYear",
        error: { warn: true, message: "End Year cannot be before Start Year." },
      });
    }

    // Project Duration
    if (projectDuration === "" || Number(projectDuration) <= 0) {
      errorStack.push({
        id: id,
        fieldName: "projectDuration",
        error: { warn: true, message: "Duration must be at least 1 month." },
      });
    }
    if (Number(projectDuration) > 120) {
      // 10 years max
      errorStack.push({
        id: id,
        fieldName: "projectDuration",
        error: { warn: true, message: "Duration cannot exceed 120 months." },
      });
    }

    // Project Summary
    const summaryLen = projectSummary.trim().length;
    if (projectSummary.trim() === "") {
      errorStack.push({
        id: id,
        fieldName: "projectSummary",
        error: { warn: true, message: "Project Summary can't be empty." },
      });
    }
    if (summaryLen < 50) {
      errorStack.push({
        id: id,
        fieldName: "projectSummary",
        error: {
          warn: true,
          message: "Summary must be at least 50 characters.",
        },
      });
    }
    if (summaryLen > 1000) {
      errorStack.push({
        id: id,
        fieldName: "projectSummary",
        error: {
          warn: true,
          message: "Summary cannot exceed 1000 characters.",
        },
      });
    }
  });

  return errorStack;
};
