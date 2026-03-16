import { Resume } from "../../models/resumes.mjs";
import { UserResume } from "../../models/userResumes.mjs";
import { createResponse } from "../../utils/helpers/createResponse.mjs";

export const deleteResume = async (req, res) => {
  const user = req.user;
  console.log(user._id);
  const id = req.params.resumeId;
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
    const resume = await UserResume.findOne({ _id: id });
    if (!resume) {
      return res
        .status(404)
        .json(createResponse(false, 404, "Resume not found", null, null));
    }
    const isOwner = resume.userId.equals(user._id);
    const isSuperAdmin = user.role === "Super Admin";
    if (isOwner || isSuperAdmin) {
      const resumeData = await Resume.findOneAndDelete({
        _id: resume.resumeId,
      });
      if (resumeData) {
        const resume = await UserResume.findOneAndDelete({ _id: id });
        return res
          .status(200)
          .json(createResponse(true, 600, "Resume Deleted", resume, error));
      }
    }
  } catch (error) {
    return res
      .status(200)
      .json(createResponse(false, 601, "Server Error", null, error));
  }
};
