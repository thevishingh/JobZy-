import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { createJob, getAllJobs, getJobById, getJobsByRecruiter } from "../controllers/job.controllers.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, createJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);
router.route("/recruiterJobs").get(isAuthenticated, getJobsByRecruiter);

export default router;