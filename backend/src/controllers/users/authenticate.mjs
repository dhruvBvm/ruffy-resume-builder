import Token from "../../models/tokens.mjs";
import User from "../../models/users.mjs";
import { createResponse } from "../../utils/helpers/createResponse.mjs";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/helpers/generateTokens.mjs";

export const authenticate = async (req, res) => {
  let { username, password } = req.body;
  let errorStack = req.errorStack;

  if (errorStack.length > 0) {
    return res
      .status(400)
      .json(createResponse(false, 400, "Validation Error", null, errorStack));
  }

  try {
    const user = await User.findOne({
      $or: [{ username: username }, { emailAddress: username }],
    });

    if (!user) {
      return res.status(404).json(
        createResponse(false, 404, "User does not exist", null, [
          {
            fieldName: "username",
            error: {
              warn: true,
              message: "User does not exist",
            },
          },
        ]),
      );
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      return res.status(401).json(
        createResponse(false, 401, "Invalid credentials", null, [
          {
            fieldName: "password",
            error: {
              warn: true,
              message: "Password does not match.",
            },
          },
        ]),
      );
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    await Token.create({
      userId: user._id,
      refreshToken: refreshToken,
    });

    const options = {
      maxAge: 2 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };
    res.cookie("accessToken", accessToken, options);
    res.cookie("refreshToken", refreshToken, {
      ...options,
      maxAge: 4* 60 * 1000,
    });
    return res.status(200).json(
      createResponse(
        true,
        200,
        "Login successful",
        {
          accessToken,
          refreshToken,
          username: user.username,
          role: user.role,
          id : user._id
        },
        [],
      ),
    );
  } catch (error) {
    return res
      .status(500)
      .json(
        createResponse(false, 500, "Internal Server Error", null, [
          error.message,
        ]),
      );
  }
};
