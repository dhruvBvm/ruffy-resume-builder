export const validateLoginBody = (req, res, next) => {
  const { username, password } = req.body;
  let errorStack = [];
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
  // if (emailAddress === "") {
  //   errorStack.push({
  //     fieldName: "emailAddress",
  //     error: {
  //       warn: true,
  //       message: "Email address can't be an empty.",
  //     },
  //   });
  // }
  // if (emailAddress.length > 50) {
  //   errorStack.push({
  //     fieldName: "emailAddress",
  //     error: {
  //       warn: true,
  //       message: "Email address can't be longer than 50 charchter.",
  //     },
  //   });
  // }
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

  req.errorStack = errorStack;
  next();
};
