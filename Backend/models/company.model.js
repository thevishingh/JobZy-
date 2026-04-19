import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
    },
    logo: {
      type: String, // url to the company logo
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the User model (recruiter)
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);
