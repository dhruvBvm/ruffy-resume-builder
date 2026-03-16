import User from "../../models/users.mjs";
import { createResponse } from "../helpers/createResponse.mjs";

export const findUserByUsername = async (username) => {
  try {
    const data = await User.findOne({ username: username });
    return data;
  } catch (error) {
    return createResponse(false, 500, "Internal Server Error", null, error);
  }
};
