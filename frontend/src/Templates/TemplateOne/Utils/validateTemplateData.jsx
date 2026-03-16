export const validateTemplateData = (templateData) => {
  let errorStack = [];
  const {
    firstname,
    lastname,
    age,
    email,
    jobTarget,
    phoneNumber,
    optionalNumber,
    githubUrl,
    linkedInUrl,
    birthDate,
  } = templateData.personalsDetails;

  if (firstname.trim() === "") {
    errorStack.push({
      fieldName: "firstname",
      error: {
        warn: true,
        message: "Firstname cant be empty.",
      },
    });
  }

  if (firstname.trim().length < 3) {
    errorStack.push({
      fieldName: "firstname",
      error: {
        warn: true,
        message: "Firstname can not be shorter than 3 character.",
      },
    });
  }
  if (firstname.trim().length > 25) {
    errorStack.push({
      fieldName: "firstname",
      error: {
        warn: true,
        message: "Firstname can not be longer than 50 character.",
      },
    });
  }

  if (lastname.trim() === "") {
    errorStack.push({
      fieldName: "lastname",
      error: {
        warn: true,
        message: "Lastname cant be empty.",
      },
    });
  }

  if (lastname.trim().length < 3) {
    errorStack.push({
      fieldName: "lastname",
      error: {
        warn: true,
        message: "Lastname can not be shorter than 3 character.",
      },
    });
  }
  if (lastname.trim().length > 25) {
    errorStack.push({
      fieldName: "lastname",
      error: {
        warn: true,
        message: "Lastname can not be longer than 50 character.",
      },
    });
  }

  if (age === "") {
    errorStack.push({
      fieldName: "age",
      error: {
        warn: true,
        message: "Age cant be empty.",
      },
    });
  }

  if (age > 100) {
    errorStack.push({
      fieldName: "age",
      error: {
        warn: true,
        message: "Age can not be 100 plus.",
      },
    });
  }
  if (age < 18) {
    errorStack.push({
      fieldName: "age",
      error: {
        warn: true,
        message: "Age must be 18 plus.",
      },
    });
  }
  if (email.trim() === "") {
    errorStack.push({
      fieldName: "email",
      error: {
        warn: true,
        message: "Email cant be empty.",
      },
    });
  }

  if (email.trim().length < 3) {
    errorStack.push({
      fieldName: "email",
      error: {
        warn: true,
        message: "Email can not be shorter than 3 character",
      },
    });
  }
  if (email.trim().length > 50) {
    errorStack.push({
      fieldName: "email",
      error: {
        warn: true,
        message: "Email can not be longer than 50 character",
      },
    });
  }
  if (jobTarget.trim() === "") {
    errorStack.push({
      fieldName: "jobTarget",
      error: {
        warn: true,
        message: "JobTarget cant be empty.",
      },
    });
  }

  if (jobTarget.trim().length < 3) {
    errorStack.push({
      fieldName: "jobTarget",
      error: {
        warn: true,
        message: "JobTarget can not be shorter than 3 character",
      },
    });
  }
  if (jobTarget.trim().length > 25) {
    errorStack.push({
      fieldName: "jobTarget",
      error: {
        warn: true,
        message: "JobTarget can not be longer than 50 character",
      },
    });
  }
  if (phoneNumber.trim() === "") {
    errorStack.push({
      fieldName: "phoneNumber",
      error: {
        warn: true,
        message: "Phone number is required.",
      },
    });
  }

  if (phoneNumber.trim().length < 10) {
    errorStack.push({
      fieldName: "phoneNumber",
      error: {
        warn: true,
        message: "Phone number must be at least 10 digits.",
      },
    });
  }
  if (phoneNumber.trim().length > 10) {
    errorStack.push({
      fieldName: "phoneNumber",
      error: {
        warn: true,
        message: "Phone number cannot exceed 10 digits.",
      },
    });
  }
  if (optionalNumber.trim().length > 0) {
    if (optionalNumber.trim() === "") {
      errorStack.push({
        fieldName: "optionalNumber",
        error: {
          warn: true,
          message: "Optional number is required.",
        },
      });
    }

    if (optionalNumber.trim().length < 10) {
      errorStack.push({
        fieldName: "optionalNumber",
        error: {
          warn: true,
          message: "Optional number must be at least 10 digits.",
        },
      });
    }
    if (optionalNumber.trim().length > 10) {
      errorStack.push({
        fieldName: "optionalNumber",
        error: {
          warn: true,
          message: "Optional number cannot exceed 10 digits.",
        },
      });
    }
  }
  if (linkedInUrl.trim() === "") {
    errorStack.push({
      fieldName: "linkedInUrl",
      error: {
        warn: true,
        message: "LinkedIn URL is required.",
      },
    });
  }
  if (linkedInUrl.trim().length > 100) {
    errorStack.push({
      fieldName: "linkedInUrl",
      error: {
        warn: true,
        message: "LinkedIn URL must be under a 100 character",
      },
    });
  }

  if (githubUrl.trim() === "") {
    errorStack.push({
      fieldName: "githubUrl",
      error: {
        warn: true,
        message: "Github URL is required.",
      },
    });
  }
  if (githubUrl.trim().length > 100) {
    errorStack.push({
      fieldName: "githubUrl",
      error: {
        warn: true,
        message: "Github URL must be under a 100 character",
      },
    });
  }
  if (birthDate.trim() === "") {
    errorStack.push({
      fieldName: "birthDate",
      error: {
        warn: true,
        message: "BirthDate is required.",
      },
    });
  }

  return errorStack;
};
