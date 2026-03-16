import { Router } from "express";
import { validateResumeBody } from "../middleware/resumes/validateResumeBody.mjs";
import { uploadResume } from "../controllers/resumes/uploadResume.mjs";
import { getResume } from "../controllers/resumes/getResume.mjs";
import { isAuthenticated } from "../middleware/auth/isAuthenticated.mjs";

const router = Router();

router.post(
  "/resume",
  isAuthenticated,
  validateResumeBody,
  uploadResume,
);
router.get("/resume/:id", getResume);

export const Resumes = router;
