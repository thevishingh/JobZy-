import express from "express";

const router = express.Router();
import {
  registerUser,
  loginUser,
  updateUserProfile,
  logoutUser,
} from "../controllers/user.controllers.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

// Register a new user
router.route("/register").post(registerUser);

// Login user
router.route("/login").post(loginUser);

// Update user profile
router.route("/profile/update").put(isAuthenticated, updateUserProfile);

// Logout user
router.route("/logout").get(logoutUser)

// export default router;
export default router;
