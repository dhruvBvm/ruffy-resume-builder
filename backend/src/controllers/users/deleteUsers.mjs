import User from "../../models/users.mjs";
import { createResponse } from "../../utils/helpers/createResponse.mjs";

export const deleteUsers = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await User.deleteOne({ _id: id });
    const response = createResponse(
      true,
      200,
      "Delete User Successfully",
      data,
      null,
    );
    res.json(response);
  } catch (error) {
    const response = createResponse(true, 200, "Server Error", null, error);
    res.json(response);
  }
};
