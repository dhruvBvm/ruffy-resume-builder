import { createResponse } from "../../utils/helpers/createResponse.mjs";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const accessToken = req.cookies?.accessToken;

  // 1. Check existence
  if (!accessToken) {
    return res
      .status(401)
      .json(
        createResponse(false, 401, "Authentication Required", null, [
          { fieldName: "accessToken", message: "No token provided" },
        ]),
      );
  }

  // 2. Verify Token
  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    const message =
      error.name === "TokenExpiredError" ? "Token Expired" : "Invalid Token";

    return res
      .status(401)
      .json(
        createResponse(false, 401, message, null, [
          { fieldName: "accessToken", message: error.message },
        ]),
      );
  }
};
