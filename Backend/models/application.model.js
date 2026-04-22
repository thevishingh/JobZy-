import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
    {
        job: {
            type: mongoose.Schema.Types.ObjectId, // Reference to the Job model
            ref: "Job",
            required: true,
        },
        applicant: {
            type: mongoose.Schema.Types.ObjectId, // Reference to the User model (applicant)
            ref: "User",
            required: true,
        },
        status: {
            type: String,
            enum: ["applied", "under review", "rejected", "accepted"],
            default: "applied",
        },
    },
    { timestamps: true },
);

// Create and export the Application model
export default mongoose.model("Application", applicationSchema);