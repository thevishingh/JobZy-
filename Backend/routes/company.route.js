import express from "express";
import {
  getCompanies,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controllers.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { authorizeRole } from "../middlewares/authorizeRole.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router
  .route("/register")
  .post(isAuthenticated, authorizeRole("recruiter"), registerCompany);
router.route("/get").get(isAuthenticated, getCompanies);
router.route("/get/:id").get(isAuthenticated, getCompanyById);
router.route("/update/:id").put(isAuthenticated, singleUpload, updateCompany);

// exporting router
export default router;
