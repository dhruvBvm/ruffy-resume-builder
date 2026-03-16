import { Router } from "express";
import { getUserResumes } from "../controllers/userResumes/getUserResumes.mjs";
import { getAllResumes } from "../controllers/userResumes/getAllResumes.mjs";
import { isAuthenticated } from "../middleware/auth/isAuthenticated.mjs";
import { deleteResume } from "../controllers/userResumes/deleteResume.mjs";
import { editUserResume } from "../controllers/userResumes/editUserResume.mjs";

const router = Router();

router.get("/user-resumes",isAuthenticated, getUserResumes);
router.get("/resumes",isAuthenticated, getAllResumes);
router.delete("/resume/:resumeId",isAuthenticated, deleteResume);
router.put("/resume/:resumeId",isAuthenticated, editUserResume);

export const UserResume = router;
