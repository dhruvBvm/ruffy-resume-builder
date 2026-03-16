export const validatePersonalFormInfo = (formData) => {
  let errorStack = [];
  const {
    firstName,
    lastName,
    age,
    emailAddress,
    jobTarget,
    phoneNumber,
    optionalNumber,
    linkedInUrl,
    githubUrl,
    birthDate,
  } = formData;

  if (firstName.trim() === "") {
    errorStack.push({
      fieldName: "firstName",
      error: {
        warn: true,
        message: "First name cant be empty.",
      },
    });
  }
  if (firstName.trim().length < 2) {
    errorStack.push({
      fieldName: "firstName",
      error: {
        warn: true,
        message: "First name must be altleast 3 character long",
      },
    });
  }
  if (firstName.trim().length > 25) {
    errorStack.push({
      fieldName: "firstName",
      error: {
        warn: true,
        message: "First name can not be more than 25 character",
      },
    });
  }
  if (lastName.trim() === "") {
    errorStack.push({
      fieldName: "lastName",
      error: {
        warn: true,
        message: "First name cant be empty.",
      },
    });
  }
  if (lastName.trim().length < 2) {
    errorStack.push({
      fieldName: "lastName",
      error: {
        warn: true,
        message: "last name must be altleast 3 character long",
      },
    });
  }
  if (lastName.trim().length > 25) {
    errorStack.push({
      fieldName: "lastName",
      error: {
        warn: true,
        message: "last name can not be more than 25 character",
      },
    });
  }
  if (age.trim() === "") {
    errorStack.push({
      fieldName: "age",
      error: {
        warn: true,
        message: "Age can't be empty.",
      },
    });
  }
  if (age > 100) {
    errorStack.push({
      fieldName: "age",
      error: {
        warn: true,
        message: "Age must be under 100.",
      },
    });
  }
  if (age < 18) {
    errorStack.push({
      fieldName: "age",
      error: {
        warn: true,
        message: "Age must be 18 Plus.",
      },
    });
  }
  if (emailAddress.trim() === "") {
    errorStack.push({
      fieldName: "emailAddress",
      error: {
        warn: true,
        message: "Email can't be empty.",
      },
    });
  }
  if (emailAddress.trim().length < 10) {
    errorStack.push({
      fieldName: "emailAddress",
      error: {
        warn: true,
        message: "Email must be 10 character long.",
      },
    });
  }
  if (jobTarget.trim() === "") {
    errorStack.push({
      fieldName: "jobTarget",
      error: {
        warn: true,
        message: "Job target can't be empty.",
      },
    });
  }
  if (jobTarget.trim().length < 7) {
    errorStack.push({
      fieldName: "jobTarget",
      error: {
        warn: true,
        message: "Job target must be 7 character long.",
      },
    });
  }
  if (phoneNumber.trim() === "") {
    errorStack.push({
      fieldName: "phoneNumber",
      error: {
        warn: true,
        message: "Phone number can't be empty.",
      },
    });
  }
  if (phoneNumber.trim().length > 10 || phoneNumber.trim().length < 10) {
    errorStack.push({
      fieldName: "phoneNumber",
      error: {
        warn: true,
        message: "Phone Must be 10 Digit long.",
      },
    });
  }
  if (optionalNumber.trim() !== "") {
    if (
      optionalNumber.trim().length > 10 ||
      optionalNumber.trim().length < 10
    ) {
      errorStack.push({
        fieldName: "optionalNumber",
        error: {
          warn: true,
          message: "Optional Number Must be 10 Digit long.",
        },
      });
    }

    if (optionalNumber.trim() === phoneNumber.trim()) {
      errorStack.push({
        fieldName: "optionalNumber",
        error: {
          warn: true,
          message: "Optional Number can not be same as Phone Number.",
        },
      });
    }
  }
  if (linkedInUrl.trim() === "") {
    errorStack.push({
      fieldName: "linkedInUrl",
      error: {
        warn: true,
        message: "LinkedIn url can't be empty.",
      },
    });
  }
  if (linkedInUrl.trim().length < 10) {
    errorStack.push({
      fieldName: "linkedInUrl",
      error: {
        warn: true,
        message: "LinkedIn URL must be 10 character long",
      },
    });
  }
  if (githubUrl.trim() === "") {
    errorStack.push({
      fieldName: "githubUrl",
      error: {
        warn: true,
        message: "Github URL url can't be empty.",
      },
    });
  }
  if (githubUrl.trim().length < 10) {
    errorStack.push({
      fieldName: "githubUrl",
      error: {
        warn: true,
        message: "Github URL must be 10 character long",
      },
    });
  }
  if (birthDate.trim() === "") {
    errorStack.push({
      fieldName: "birthDate",
      error: {
        warn: true,
        message: "Birth date can't be empty.",
      },
    });
  }

  return errorStack;
};
