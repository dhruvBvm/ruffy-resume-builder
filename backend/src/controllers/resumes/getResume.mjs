import { Resume } from "../../models/resumes.mjs";
import { createResponse } from "../../utils/helpers/createResponse.mjs";

export const getResume = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Resume.findOne({ _id: id });
    if (data) {
      const response = createResponse(
        true,
        200,
        "Fetch Resume SuccesFully",
        data,
        null,
      );
      res.json(response);
    } else {
      const response = createResponse(
        true,
        200,
        "No Resumes Exist with this Id",
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
