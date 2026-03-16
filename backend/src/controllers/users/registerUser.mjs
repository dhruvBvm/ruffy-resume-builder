
import { createResponse } from "../../utils/helpers/createResponse.mjs";
import { addUser } from "../../utils/users/addUser.mjs";

export const registerUser = async (req, res) => {
  let usersData = req.body;
  let errorStack = req.errorStack;
  if (errorStack.length > 0) {
    res
      .status(200)
      .json(createResponse(false, 400, "Bad Request", null, errorStack));
  } else {
    addUser(usersData)
      .then((result) => res.status(200).json(result))
      .catch((error) => res.status(200).json(error));
  }
};
