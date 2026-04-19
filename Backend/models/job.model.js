import { application } from "express";
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
    },
    location: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "contract", "internship"],
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the Company model
      ref: "Company",
      required: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the User model (recruiter)
      ref: "User",
      required: true,
    },
    applications: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the Application model
      ref: "Application",
    },
  },
  { timestamps: true },
);

// Create and export the Job model
export default mongoose.model("Job", jobSchema);
