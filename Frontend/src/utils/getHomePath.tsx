export const getHomePath = (role?: string) => {
  switch (role) {
    // Student Routes
    case "student":
      return {
        home: "/jobs",
        jobs: "/jobs",
        jobDetails: "/job-details/:id",
        browseJobs: "/browse-jobs",
        profile: "/profile",
      };

    // Recruiter Routes
    case "recruiter":
      return {
        home: "/admin/companies",
        adminJobs: "/admin/jobs",
        applicants: "/admin/jobs/:id/applicants",
        newJobs: "/admin/jobs/new-jobs",
        companies: "/admin/companies",
        companyDetailsUpdate: "/admin/companies/details-update/:id",
      };

    // Public Routes
    default:
      return {
        home: "/",
        login: "/login",
        register: "/register",
      };
  }
};