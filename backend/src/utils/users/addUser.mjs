
import User from "../../models/users.mjs";
import { createResponse } from "../helpers/createResponse.mjs";

export const addUser = async (userData) => {
    try {
        const data = await User.insertOne({ ...userData });
        return createResponse(true, 201, "Register User successfully.", data, null)
    } catch (error) {
        return createResponse(false, 500, "Server Error", null, error)
    }
}