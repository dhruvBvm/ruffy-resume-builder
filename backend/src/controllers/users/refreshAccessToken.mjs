import Jwt from "jsonwebtoken";
import { generateAccessToken } from "../../utils/helpers/generateTokens.mjs";
import Token from "../../models/tokens.mjs";
import User from "../../models/users.mjs";
import { createResponse } from "../../utils/helpers/createResponse.mjs";

// routes/auth.js
export const refreshAccessToken = async (req, res) => {
  const refreshToken = req.cookies?.refreshToken;
  if (!refreshToken)
    return res.status(401).json(
      createResponse(false, 401, "Refresh Token is required", null, [
        {
          filedName: "refreshToken",
          message: "Refresh Token is Required",
        },
      ]),
    );

  try {
    const databaseToken = await Token.findOne({ refreshToken });

    if (!databaseToken) {
      return res.json(
        createResponse(false, 401, "Session Expired", null, [
          {
            filedName: "Session",
            message: "Refresh Token Is Expired... Authenticate",
          },
        ]),
      );
    }

    const decodedToken = Jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
    );
    const decodedDatabaseToken = Jwt.verify(
      databaseToken.refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
    );

    if (databaseToken.userId.toString() === decodedToken._id) {
      const user = await User.findOne({ _id: decodedToken._id });
      const newAccessToken = generateAccessToken(user);
      const options = {
        maxAge: 2 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      };
      res.cookie("accessToken", newAccessToken, options);
      res.json(
        createResponse(
          true,
          200,
          "New Accesss Token Granted",
          {
            accesssToken: newAccessToken,
          },
          null,
        ),
      );
    } else {
      res.json(
        createResponse(false, 401, "Fake Refresh Token", null, [
          {
            filedName: "refreshToken",
            message: "This is Invalid Refresh Token",
          },
        ]),
      );
    }
  } catch (error) {
    res.json(createResponse(false, 401, "Server Error", null, error));
  }
};
