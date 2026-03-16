import User from "../../models/users.mjs";
import { createResponse } from "../../utils/helpers/createResponse.mjs";

export const getAllUsers = async (req, res) => {
  try {
    const data = await User.find();
    if (data.length > 0) {
      const response = createResponse(
        true,
        600,
        "All Users Fetch SuccesFully",
        data, 
        null,
      );
      res.json(response);
    } else {
      const response = createResponse(
        true,
        200,
        "No Users Exist..",
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
