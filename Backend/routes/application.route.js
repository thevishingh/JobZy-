import express from "express";
import { applyJob, getpplicants, getppliedJobs, updateJobsStatus } from "../controllers/application.controllers.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router = express.Router();

router.route("/apply/:id").get(isAuthenticated, applyJob);
router.route("/get").get(isAuthenticated, getppliedJobs);
router.route("/applicant/:id").get(isAuthenticated, getpplicants);
router.route("/status/:id/update").post(isAuthenticated, updateJobsStatus);

export default router;