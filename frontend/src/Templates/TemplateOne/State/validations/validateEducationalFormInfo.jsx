export const validateEducationalFormInfo = (formData) => {
  let errorStack = [];
  formData.forEach((element) => {
    const { id, degreeName, collegeName, startYear, endYear, CGPA, summary } =
      element;

    // Degree Name
    if (degreeName.trim() === "") {
      errorStack.push({
        id: id,
        fieldName: "degreeName",
        error: { warn: true, message: "Degree name can't be empty." },
      });
    }
    if (degreeName.trim().length < 3) {
      errorStack.push({
        id: id,
        fieldName: "degreeName",
        error: {
          warn: true,
          message: "Degree name must be at least 3 characters long.",
        },
      });
    }
    if (degreeName.trim().length > 60) {
      errorStack.push({
        id: id,
        fieldName: "degreeName",
        error: {
          warn: true,
          message: "Degree name cannot exceed 60 characters.",
        },
      });
    }

    // College Name
    if (collegeName.trim() === "") {
      errorStack.push({
        id: id,
        fieldName: "collegeName",
        error: {
          warn: true,
          message: "College/University name can't be empty.",
        },
      });
    }
    if (collegeName.trim().length < 3) {
      errorStack.push({
        id: id,
        fieldName: "collegeName",
        error: {
          warn: true,
          message: "College name must be at least 3 characters long.",
        },
      });
    }
    if (collegeName.trim().length > 100) {
      errorStack.push({
        id: id,
        fieldName: "collegeName",
        error: {
          warn: true,
          message: "College name cannot exceed 100 characters.",
        },
      });
    }

    // Years
    if (startYear === "") {
      errorStack.push({
        id: id,
        fieldName: "startYear",
        error: { warn: true, message: "Start year is required." },
      });
    }
    if (startYear > 2026) {
      errorStack.push({
        id: id,
        fieldName: "startYear",
        error: {
          warn: true,
          message: "Start year Must be Before Current Year.",
        },
      });
    }
    if (startYear < 1960) {
      errorStack.push({
        id: id,
        fieldName: "startYear",
        error: {
          warn: true,
          message: "Start year Must be After 1960",
        },
      });
    }
    if (endYear === "") {
      errorStack.push({
        id: id,
        fieldName: "endYear",
        error: { warn: true, message: "End year is required." },
      });
    }
    if (endYear < 1960) {
      errorStack.push({
        id: id,
        fieldName: "endYear",
        error: {
          warn: true,
          message: "End year Must be After 1960",
        },
      });
    }
    if (startYear > endYear && endYear !== "") {
      errorStack.push({
        id: id,
        fieldName: "endYear",
        error: { warn: true, message: "End year cannot be before start year." },
      });
    }

    // CGPA
    if (CGPA.trim() === "") {
      errorStack.push({
        id: id,
        fieldName: "CGPA",
        error: { warn: true, message: "CGPA/Percentage is required." },
      });
    }
    if (parseFloat(CGPA) > 100) {
      errorStack.push({
        id: id,
        fieldName: "CGPA",
        error: { warn: true, message: "CGPA cannot exceed 100." },
      });
    }

    // Summary
    if (summary.trim() === "") {
      errorStack.push({
        id: id,
        fieldName: "summary",
        error: { warn: true, message: "Educational summary can't be empty." },
      });
    }
    if (summary.trim().length < 200) {
      errorStack.push({
        id: id,
        fieldName: "summary",
        error: {
          warn: true,
          message: "Summary must be at least 200 characters.",
        },
      });
    }
    if (summary.trim().length > 500) {
      errorStack.push({
        id: id,
        fieldName: "summary",
        error: { warn: true, message: "Summary cannot exceed 500 characters." },
      });
    }
  });
  return errorStack;
};
