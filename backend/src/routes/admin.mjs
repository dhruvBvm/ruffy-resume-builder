import { Router } from "express";
import { isAuthenticated } from "../middleware/auth/isAuthenticated.mjs";
import { getAdminDashboardData } from "../controllers/admin/getAdminDashboardData.mjs";
import { getAllUsers } from "../controllers/users/getAllUsers.mjs";

const router = Router();

export const Admin = router;

// dashboard Data
router.get("/dashboard", isAuthenticated, getAdminDashboardData);

// get all users
router.get("/users", isAuthenticated, getAllUsers );
