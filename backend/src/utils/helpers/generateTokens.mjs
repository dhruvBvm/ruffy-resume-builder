import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
  const token = jwt.sign(
    {
      _id: user._id,
      username: user.username,
      emailAddress: user.emailAddress,
      role: user.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "2m" },
  );
  return token;
};

export const generateRefreshToken = (user) => {
  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "4m" },
  );
  return token;
};
