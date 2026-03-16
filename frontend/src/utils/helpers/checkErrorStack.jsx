export const checkErrorStack = (errorStack, fieldName) => {
  if (errorStack) {
    const fieldErrors = errorStack.filter(
      (error) => error.fieldName === fieldName,
    );
    if (fieldErrors) {
      return fieldErrors[0]?.error;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
