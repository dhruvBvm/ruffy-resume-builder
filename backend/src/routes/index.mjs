import { Router } from "express";

import { Users } from "./users.mjs";
import { Resumes } from "./resumes.mjs";
import { UserResume } from "./userResume.mjs";
import { Admin } from "./admin.mjs";

const router = Router();

router.get("/", (req, res) => {
  res.send("version 1");
});
router.use(Users);
router.use(Resumes);
router.use("/admin",Admin);
router.use(UserResume);

export default router;
