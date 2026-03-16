export const validateOptionalFormInfo = (formData) => {
  const {
    gender,
    personalWebsite,
    country,
    state,
    city,
    postalCode,
    nationality,
    summary,
  } = formData;
  let errorStack = [];

  if (gender === "") {
    errorStack.push({
      fieldName: "gender",
      error: {
        warn: true,
        message: "You Must select Your Gender.",
      },
    });
  }

  // Personal Website
  if (personalWebsite.trim() !== "") {
    if (personalWebsite.trim().length < 10) {
      errorStack.push({
        fieldName: "personalWebsite",
        error: {
          warn: true,
          message: "Personal Website must be 10 character long.",
        },
      });
    }
    if (personalWebsite.trim().length > 100) {
      errorStack.push({
        fieldName: "personalWebsite",
        error: {
          warn: true,
          message: "Personal Website cannot exceed 100 characters.",
        },
      });
    }
  }

  // Country
  if (country.trim() === "") {
    errorStack.push({
      fieldName: "country",
      error: {
        warn: true,
        message: "Country can't be empty.",
      },
    });
  }
  if (country.trim().length < 2) {
    errorStack.push({
      fieldName: "country",
      error: {
        warn: true,
        message: "Country name must be atleast 2 character long.",
      },
    });
  }
  if (country.trim().length > 56) {
    errorStack.push({
      fieldName: "country",
      error: {
        warn: true,
        message: "Country name cannot exceed 56 characters.",
      },
    });
  }

  // State
  if (state.trim() === "") {
    errorStack.push({
      fieldName: "state",
      error: {
        warn: true,
        message: "State can't be empty.",
      },
    });
  }
  if (state.trim().length < 2) {
    errorStack.push({
      fieldName: "state",
      error: {
        warn: true,
        message: "State name must be atleast 2 character long.",
      },
    });
  }
  if (state.trim().length > 50) {
    errorStack.push({
      fieldName: "state",
      error: {
        warn: true,
        message: "State name cannot exceed 50 characters.",
      },
    });
  }

  // City
  if (city.trim() === "") {
    errorStack.push({
      fieldName: "city",
      error: {
        warn: true,
        message: "City can't be empty.",
      },
    });
  }
  if (city.trim().length < 2) {
    errorStack.push({
      fieldName: "city",
      error: {
        warn: true,
        message: "City name must be atleast 2 character long.",
      },
    });
  }
  if (city.trim().length > 50) {
    errorStack.push({
      fieldName: "city",
      error: {
        warn: true,
        message: "City name cannot exceed 50 characters.",
      },
    });
  }

  // Postal Code
  if (postalCode.trim() === "") {
    errorStack.push({
      fieldName: "postalCode",
      error: {
        warn: true,
        message: "Postal code can't be empty.",
      },
    });
  }
  if (postalCode.trim().length < 3) {
    errorStack.push({
      fieldName: "postalCode",
      error: {
        warn: true,
        message: "Postal code must be atleast 3 character long.",
      },
    });
  }
  if (postalCode.trim().length > 10) {
    errorStack.push({
      fieldName: "postalCode",
      error: {
        warn: true,
        message: "Postal code cannot exceed 10 characters.",
      },
    });
  }

  // Nationality
  if (nationality.trim() === "") {
    errorStack.push({
      fieldName: "nationality",
      error: {
        warn: true,
        message: "Nationality can't be empty.",
      },
    });
  }
  if (nationality.trim().length < 3) {
    errorStack.push({
      fieldName: "nationality",
      error: {
        warn: true,
        message: "Nationality must be atleast 3 character long.",
      },
    });
  }
  if (nationality.trim().length > 30) {
    errorStack.push({
      fieldName: "nationality",
      error: {
        warn: true,
        message: "Nationality cannot exceed 30 characters.",
      },
    });
  }

  // Summary
  if (summary.trim() === "") {
    errorStack.push({
      fieldName: "summary",
      error: {
        warn: true,
        message: "Professional summary can't be empty.",
      },
    });
  }
  if (summary.trim().length < 300) {
    errorStack.push({
      fieldName: "summary",
      error: {
        warn: true,
        message: "Summary should be at least 300 characters.",
      },
    });
  }
  if (summary.trim().length > 900) {
    errorStack.push({
      fieldName: "summary",
      error: {
        warn: true,
        message: "Summary must be under 900 character.",
      },
    });
  }

  return errorStack;
};
