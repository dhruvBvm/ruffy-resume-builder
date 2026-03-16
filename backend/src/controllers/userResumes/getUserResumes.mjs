import { UserResume } from "../../models/userResumes.mjs";
import { createResponse } from "../../utils/helpers/createResponse.mjs";

export const getUserResumes = async (req, res) => {
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
  try {
    const data = await UserResume.find({ userId: user._id })
      .populate("userId", "username")
      .limit(10);
    if (data.length > 0) {
      const response = createResponse(
        true,
        600,
        "Fetch Users Resume SuccesFully",
        data,
        null,
      );
      res.json(response);
    } else {
      const response = createResponse(
        true,
        601,
        "No Resumes Exist with this Users",
        data,
        null,
      );
      res.json(response);
    }
  } catch (error) {
    const response = createResponse(false, 500, "Server Error", null, error);
    res.json(response);
  }
};
