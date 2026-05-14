import Job from "../models/job.model.js";

// Create a new job
export const createJob = async (req, res) => {
  try {
    const {
      title,
      description,
      location,
      experienceLevel,
      salary,
      requirements,
      responsibilities,
      jobType,
      position,
      companyId,
    } = req.body;

    const userId = req.id;

    if (
      !title ||
      !description ||
      !location ||
      experienceLevel === undefined ||
      salary === undefined ||
      !requirements ||
      !responsibilities ||
      !jobType ||
      position === undefined ||
      !companyId
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const newJob = await Job.create({
      title,
      description,
      location,
      experienceLevel: Number(experienceLevel),
      salary: Number(salary),

      requirements: Array.isArray(requirements)
        ? requirements
        : requirements.split(",").map((item) => item.trim()),

      responsibilities: Array.isArray(responsibilities)
        ? responsibilities
        : responsibilities.split(",").map((item) => item.trim()),

      jobType,
      position: Number(position),
      company: companyId,
      created_by: userId,
    });

    return res.status(201).json({
      message: "New job created successfully",
      success: true,
      job: newJob,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

// Get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const query = keyword
      ? {
          $or: [
            { title: { $regex: keyword, $options: "i" } },
            { description: { $regex: keyword, $options: "i" } },
          ],
        }
      : {};

    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .populate({
        path: "applications",
        populate: {
          path: "applicant",
        },
      })
      .sort({ createdAt: -1 });

    console.log(jobs.length);
    return res.status(200).json({
      message: "Jobs fetched successfully",
      success: true,
      jobs,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

// Get a job by ID ( for the student to view the job details and apply for the job)
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId)
      .populate({
        path: "company",
      })
      .populate({
        path: "applications", // populate Application docs
        populate: {
          path: "applicant", // then populate the user inside each application
        },
      });

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Job fetched successfully",
      success: true,
      job,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

// Get jobs created by a specific recruiter
export const getJobsByRecruiter = async (req, res) => {
  try {
    const recruiterId = req.id;

    const jobs = await Job.find({ created_by: recruiterId })
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });

    if (!jobs || jobs.length === 0) {
      return res.status(200).json({
        message: "No jobs found for this recruiter",
        success: true,
        jobs: [],
      });
    }

    return res.status(200).json({
      message: "Jobs fetched successfully",
      success: true,
      jobs,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
