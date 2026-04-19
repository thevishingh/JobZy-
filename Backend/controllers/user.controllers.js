import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register a new user
export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, role, phoneNumber } = req.body;

    // check if user already exists
    if (!fullName || !email || !password || !role || !phoneNumber) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user
    await User.create({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
      role,
    });

    res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error registering user",
      error: error.message,
      success: false,
    });
  }
};

// Login user
export const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // validate input fields
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // check if user exists
    let user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    // check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid password",
        success: false,
      });
    }

    // check if role is correct
    if (user.role !== role) {
      return res.status(400).json({
        message: "Account does not exist for the selected role",
        success: false,
      });
    }

    // generate JWT token
    const tokenData = { userId: user._id };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    // return user data without password

    const safeUser = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      phoneNumber: user.phoneNumber,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        message: `welcome back ${user.fullName}`,
        success: true,
        user: safeUser,
      });
  } catch (error) {
    return res.status(500).json({
      message: "Error logging in user",
      error: error.message,
      success: false,
    });
  }
};

// Logout user
export const logoutUser = async (req, res) => {
  try {
    return res
      .status(200)
      .clearCookie("token", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        message: "User logged out successfully",
        success: true,
      });
  } catch (error) {
    return res.status(500).json({
      message: "Error logging out user",
      error: error.message,
      success: false,
    });
  }
};

// update user profile
export const updateUserProfile = async (req, res) => {
  try {
    const { fullName, phoneNumber, profilePicture, bio, skills,email } = req.body;
    const file = req.file;

    if (!fullName && !phoneNumber && !profilePicture && !bio && !skills && !email) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }

    // cloudinary upload

    const userId = req.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    // Convert skills string to array if provided
    const skillArray = skills
      ? skills.split(",").map((skill) => skill.trim())
      : undefined;

    // Update only provided fields
    if (fullName) user.fullName = fullName;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skillArray) user.profile.skills = skillArray;
    if (email) user.email = email.toLowerCase();
    
    // resume and education updates will be handled in separate endpoints

    await user.save();

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      phoneNumber: user.phoneNumber,
      profilePicture: user.profile.profilePicture,
    };

    return res.status(200).json({
      message: "Profile updated successfully",
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error updating user profile",
      error: error.message,
      success: false,
    });
  }
};
