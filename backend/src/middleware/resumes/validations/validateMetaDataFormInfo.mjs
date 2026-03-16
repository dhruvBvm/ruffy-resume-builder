export const validateMetaDataFormInfo = (metaData) => {
  let errorStack = [];
  const { resumeName, resumeType, resumeDetails } = metaData;

  // Resume Name
  if (resumeName.trim() === "") {
    errorStack.push({
      fieldName: "resumeName",
      error: { warn: true, message: "Resume name can't be empty." },
    });
  } else if (resumeName.trim().length < 3) {
    errorStack.push({
      fieldName: "resumeName",
      error: {
        warn: true,
        message: "Resume name must be at least 3 characters long.",
      },
    });
  }

  // Resume Type
  if (resumeType.trim() === "") {
    errorStack.push({
      fieldName: "resumeType",
      error: { warn: true, message: "Please select a resume type." },
    });
  }

  // Resume Details
  if (resumeDetails.trim() === "") {
    errorStack.push({
      fieldName: "resumeDetails",
      error: { warn: true, message: "Resume details can't be empty." },
    });
  } else if (resumeDetails.trim().length < 20) {
    errorStack.push({
      fieldName: "resumeDetails",
      error: { warn: true, message: "Details must be at least 20 characters." },
    });
  }

  return errorStack;
};
