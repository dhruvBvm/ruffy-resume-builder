export const checkArrayErrorStack = (errorStack, fieldName, id) => {
  const stack = errorStack.filter((error) => error.id === id);

  if (errorStack) {
    const fieldErrors = errorStack.filter(
      (error) => error.id === id && error.fieldName === fieldName,
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
