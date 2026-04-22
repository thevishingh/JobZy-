import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDb from "./utils/db.js";
import userRoutes from "./routes/user.route.js";
import companyRoutes from "./routes/company.route.js";
import jobRoutes from "./routes/job.route.js";
import jobsApplication from "./routes/application.route.js";

// Create Express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(app.corsOptions));

// Api's Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/company", companyRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/application", jobsApplication);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // calling the connectDb function to establish a connection to the database
  connectDb();
  console.log(`Server is running on port ${PORT}`);
});
