import { UserResume } from "../../models/userResumes.mjs";
import User from "../../models/users.mjs";
import { createResponse } from "../../utils/helpers/createResponse.mjs";

export const getAdminDashboardData = async (req, res) => {
  const user = req.user;
  if (!user || user.role !== "Super Admin") {
    return res.status(401).json(
      createResponse(false, 601, "You are not admin", null, [
        {
          filedName: "admin",
          message: "You are not admin.",
        },
      ]),
    );
  }

  try {
    const [recentResumes, totalResumes,recentUsers, userCount] = await Promise.all([
      UserResume.find().populate("userId", "username").sort({ createdAt: -1 }).limit(8),
      UserResume.countDocuments(),
      User.find().sort({ createdAt: -1 }).limit(4),
      User.countDocuments(),
    ]);
    return res
      .status(200)
      .json(
        createResponse(
          true,
          600,
          "Admin Dashboard data",
          { recentResumes, totalResumes,recentUsers, userCount },
          null,
        ),
      );
  } catch (error) {
    return res
      .status(200)
      .json(createResponse(false, 601, "Server Error", null, error));
  }
};
