export const validateLoginForm = (loginFormData) => {
  let errorStack = [];
  const { username, password } = loginFormData;

  if (username === "") {
    errorStack.push({
      fieldName: "username",
      error: {
        warn: true,
        message: "Username cant be empty.",
      },
    });
  }
  if (username.length <= 6) {
    errorStack.push({
      fieldName: "username",
      error: {
        warn: true,
        message: "Username must be 6 charchter long.",
      },
    });
  }
  if (username.length >= 20) {
    errorStack.push({
      fieldName: "username",
      error: {
        warn: true,
        message: "Username Can't be more that 20 charchter.",
      },
    });
  }

  if (password.length > 50) {
    errorStack.push({
      fieldName: "password",
      error: {
        warn: true,
        message: "Password can't be longer than 50 charchter.",
      },
    });
  }
  if (password.length < 8) {
    errorStack.push({
      fieldName: "password",
      error: {
        warn: true,
        message: "Password must be 8 charchter long.",
      },
    });
  }

  return errorStack;
};
