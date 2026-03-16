import { createResponse } from "../../utils/helpers/createResponse.mjs";

export const getAuthStatus = (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json(
      createResponse(false, 601, "User is Not Log in", null, [
        {
          filedName: "logout",
          message: "You are not logged in.",
        },
      ]),
    );
  }

  return res
    .status(200)
    .json(createResponse(true, 600, "User is Logged in",user, null));
};
