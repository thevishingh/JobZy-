import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      default: "student",
      required: true,
    },
    profile: {
      bio: { type: String },
      skills: [{ type: String }],
      resume: { type: String }, // url to the resume file
      resumeFileName: { type: String }, // original file name of the resume
      education: [
        {
          institution: { type: String },
          degree: { type: String },
          startDate: { type: Date },
          endDate: { type: Date },
        },
      ],
      website: { type: String }, // portfolio Link for recruiters
      companyName: { type: mongoose.Schema.Types.ObjectId, ref: "Company" }, // company name for recruiters
      profilePicture: { type: String, default: "" }, // url to the profile picture
    },
  },
  { timestamps: true },
);

// Create and export the User model
export default mongoose.model("User", userSchema);
