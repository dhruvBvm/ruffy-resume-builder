import jwt from "jsonwebtoken";
import { createResponse } from "../../utils/helpers/createResponse.mjs";
import Token from "../../models/tokens.mjs";

export const logout = async (req, res) => {
  const refreshToken = req.cookies?.refreshToken;
  const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  };

  if (!refreshToken) {
    res.clearCookie("refreshToken", cookieOptions);
    res.clearCookie("accessToken", cookieOptions);
    return res
      .status(200)
      .json(
        createResponse(
          true,
          200,
          "Already logged out",
          { message: "User Has been Log Out already" },
          null,
        ),
      );
  }

  const user = req.user;
  const decodedRefreshToken = jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
  );

  if (!user._id === decodedRefreshToken._id) {
    return res.status(401).json(
      createResponse(false, 401, "Not Valid Token", null, [
        {
          filedName: "refreshToken",
          message: "This is not valid Token.",
        },
      ]),
    );
  }

  try {
    const data = await Token.deleteOne({ refreshToken, userId: user._id });
    res.clearCookie("refreshToken", cookieOptions);
    res.clearCookie("accessToken", cookieOptions);

    if (data.deletedCount <= 0) {
      return res.json(
        createResponse(false, 401, "Session Expired", null, [
          {
            filedName: "Session",
            message: "Refresh Token Is Expired... Authenticate",
          },
        ]),
      );
    }
    return res
      .status(200)
      .json(createResponse(true, 200, "Session cleared", data, null));
  } catch (error) {
    res.clearCookie("refreshToken", cookieOptions);
    res.clearCookie("accessToken", cookieOptions);
    return res
      .status(200)
      .json(createResponse(true, 200, "Session cleared", null, null));
  }
};
