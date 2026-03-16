import { isAuthenticated } from "../../middleware/auth/isAuthenticated.mjs";
import { Resume } from "../../models/resumes.mjs";
import { UserResume } from "../../models/userResumes.mjs";
import { createResponse } from "../../utils/helpers/createResponse.mjs";

export const uploadResume = async (req, res) => {
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
  if (req.errorStack.length > 0) {
    return res
      .status(200)
      .json(createResponse(false, 400, "Bad Request", null, req.errorStack));
  }
  try {
    const data = await Resume.insertOne({
      personalsDetails: req.body.personalsDetails,
      optionalsDetails: req.body.optionalsDetails,
      educationalsDetails: req.body.educationalDetails,
      projectsDetails: req.body.projectsDetails,
      skillsDetails: req.body.skillsDetails,
    });

    if (data) {
      const userResult = await UserResume.insertOne({
        userId: req.user._id,
        resumeId: data._id,
        ...req.body.metaData,
      });
      const response = createResponse(
        true,
        201,
        "Resume Data Uploaded successfully.",
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
