

export const validateRegistrationForm = (registerFormdata) => {
  let errorStack = [];
  const {
    username,
    lastname,
    firstname,
    password,
    reTypePassword,
    age,
    phoneNumber,
    emailAddress,
  } = registerFormdata;

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
  if (firstname === "") {
    errorStack.push({
      fieldName: "firstname",
      error: {
        warn: true,
        message: "Firstname cant be empty.",
      },
    });
  }
  if (firstname.length <= 3) {
    errorStack.push({
      fieldName: "firstname",
      error: {
        warn: true,
        message: "Firstname must be 6 charchter long.",
      },
    });
  }
  if (firstname.length >= 20) {
    errorStack.push({
      fieldName: "firstname",
      error: {
        warn: true,
        message: "Firstname Can't be more that 20 charchte.",
      },
    });
  }
  if (lastname === "") {
    errorStack.push({
      fieldName: "lastname",
      error: {
        warn: true,
        message: "Lastname cant be empty.",
      },
    });
  }
  if (lastname.length <= 3) {
    errorStack.push({
      fieldName: "lastname",
      error: {
        warn: true,
        message: "Lastname must be 6 charchter long.",
      },
    });
  }
  if (lastname.length >= 20) {
    errorStack.push({
      fieldName: "lastname",
      error: {
        warn: true,
        message: "Lastname Can't be more that 20 charchter.",
      },
    });
  }
  if (age === "") {
    errorStack.push({
      fieldName: "age",
      error: {
        warn: true,
        message: "Age field is required.",
      },
    });
  }
  if (age < 18) {
    errorStack.push({
      fieldName: "age",
      error: {
        warn: true,
        message: "Age must be  18 plus.",
      },
    });
  }
  if (age > 100) {
    errorStack.push({
      fieldName: "age",
      error: {
        warn: true,
        message: "Age can't be 100 plus.",
      },
    });
  }
  if (emailAddress === "") {
    errorStack.push({
      fieldName: "emailAddress",
      error: {
        warn: true,
        message: "Email address can't be an empty.",
      },
    });
  }
  if (emailAddress.length > 50) {
    errorStack.push({
      fieldName: "emailAddress",
      error: {
        warn: true,
        message: "Email address can't be longer than 50 charchter.",
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
  if (reTypePassword === "") {
    errorStack.push({
      fieldName: "reTypePassword",
      error: {
        warn: true,
        message: "Please confirm password",
      },
    });
  }
  if (reTypePassword !== password) {
    errorStack.push({
      fieldName: "reTypePassword",
      error: {
        warn: true,
        message: "Confirm Password does not match with Password.",
      },
    });
  }
  if (phoneNumber.length !== 10) {
    errorStack.push({
      fieldName: "phoneNumber",
      error: {
        warn: true,
        message: "Phone number must be 10 number long.",
      },
    });
  }
  if (phoneNumber.split()[0] === 9) {
    errorStack.push({
      fieldName: "phoneNumber",
      error: {
        warn: true,
        message: "Password must start with 9",
      },
    });
  }

  return errorStack;
};
