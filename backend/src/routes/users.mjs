import { Router } from "express";

// middleware
import { validateRegisterBody } from "../middleware/register/validateRegisterBody.mjs";

// controllers
import { registerUser } from "../controllers/users/registerUser.mjs";
import { validateLoginBody } from "../middleware/login/validateLoginBody.mjs";
import { getAllUsers } from "../controllers/users/getAllUsers.mjs";
import { deleteUsers } from "../controllers/users/deleteUsers.mjs";
import { refreshAccessToken } from "../controllers/users/refreshAccessToken.mjs";
import { authenticate } from "../controllers/users/authenticate.mjs";
import { isAuthenticated } from "../middleware/auth/isAuthenticated.mjs";
import { logout } from "../controllers/users/logout.mjs";
import { getAuthStatus } from "../controllers/users/getAuthStatus.mjs";
import { getDashboardData } from "../controllers/users/getDashboardData.mjs";

const router = Router();

// login user
router.post("/login", validateLoginBody, authenticate);

// register the user
router.post("/register", validateRegisterBody, registerUser);

// Regenerate Refersh token
router.post("/regenerate", refreshAccessToken);

// Logout User
router.post("/logout", isAuthenticated, logout);

// auth status
router.post("/authStatus", isAuthenticated, getAuthStatus);

// dashboard Data
router.get("/user/dashboard",isAuthenticated, getDashboardData);

// user profile
// router.get("/user/profile")

// delete user
router.delete("/user/:id", deleteUsers);




export const Users = router;
