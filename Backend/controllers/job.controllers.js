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
      !jobType ||
      !position ||
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
      experienceLevel,
      salary,
      requirements: requirements.split(",").map((item) => item.trim()),
      jobType, // keep this as string
      position,
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
    // ADDING QUERY PARAMETER FOR SEARCHING
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    // Fetch all jobs from the database that match the search query
    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({
        createdAt: -1,
      });

    if (jobs.length === 0 || !jobs) {
      return res.status(404).json({
        message: "No jobs found",
        success: false,
      });
    }

    // Return the list of jobs in the response
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

    // Fetch the job from the database using the provided ID
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    // Return the job details in the response
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
    const jobs = await Job.find({ created_by: recruiterId });

    if (jobs.length === 0 || !jobs) {
      return res.status(404).json({
        message: "No jobs found for this recruiter",
        success: false,
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
