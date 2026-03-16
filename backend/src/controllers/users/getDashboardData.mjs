import { UserResume } from "../../models/userResumes.mjs";
import { createResponse } from "../../utils/helpers/createResponse.mjs";

export const getDashboardData = async (req, res) => {
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
    const [recentResumes, totalResumes] = await Promise.all([
      UserResume.find({ userId: user._id })
        .populate("userId", "username")
        .sort({ createdAt: -1 })
        .limit(4),
      UserResume.countDocuments({ userId: user._id }),
    ]);
    return res
      .status(200)
      .json(
        createResponse(
          true,
          600,
          "User Dashboard data",
          { recentResumes, totalResumes },
          null,
        ),
      );
  } catch (error) {
    return res
      .status(200)
      .json(createResponse(false, 601, "Server Error", null, error));
  }
};
