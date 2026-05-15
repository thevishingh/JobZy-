import type { RootState } from "@/redux/store"
import {
  BriefcaseBusiness,
  FilePlus2,
  Search,
  SlidersHorizontal,
  Eye,
  Building2,
  MapPin,
  IndianRupee,
  UsersRound,
  X,
  Users,
} from "lucide-react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs"

type Job = {
  _id: string
  title: string
  description: string
  requirements: string[]
  salary: number
  experienceLevel: number
  location: string
  jobType: "full-time" | "part-time" | "contract" | "internship"
  position: number
  responsibilities?: string[]
  company?: {
    _id: string
    name: string
    logo?: string
    location?: string
  }
  created_by: string
  applications: string[]
  createdAt: string
  updatedAt: string
}

export default function PostJobPage() {
  const navigate = useNavigate()

  useGetAllAdminJobs()

  const [searchQuery, setSearchQuery] = useState("")
  const [filterOption, setFilterOption] = useState("")
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const { allAdminJobs } = useSelector((store: RootState) => store.job)

  const jobs: Job[] = Array.isArray(allAdminJobs) ? (allAdminJobs as Job[]) : []

  const filteredJobs = [...jobs]
    .filter((job) =>
      job.title?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (filterOption === "recent") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }

      if (filterOption === "oldest") {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      }

      if (filterOption === "a-z") {
        return a.title.localeCompare(b.title)
      }

      if (filterOption === "z-a") {
        return b.title.localeCompare(a.title)
      }

      return 0
    })

  return (
    <section className="min-h-screen bg-[#fbf7ef] px-4 pt-20 text-[#393629] sm:px-6 lg:px-8 lg:pt-0 dark:bg-[#050509] dark:text-white">
      <div className="mx-auto">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-orange-500/10 sm:p-6 lg:p-8 dark:border-white/10 dark:bg-[#111118]">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 font-mont text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase dark:text-orange-300">
                <BriefcaseBusiness className="h-4 w-4" />
                Recruiter Jobs
              </div>

              <h1 className="font-unbounded text-2xl font-semibold sm:text-3xl">
                Posted Jobs
              </h1>

              <p className="mt-2 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                View, search, filter, and manage all jobs posted by you.
              </p>
            </div>

            <button
              onClick={() => navigate("/admin/jobs/new-jobs")}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#c65d3b] px-5 py-2.5 font-mont text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#b65335] sm:w-auto"
            >
              <FilePlus2 className="h-4 w-4" />
              Post New Job
            </button>
          </div>

          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-[#fbf7ef] px-4 py-2.5 dark:border-white/10 dark:bg-[#050509]">
              <SlidersHorizontal className="h-4 w-4 text-orange-500" />

              <select
                value={filterOption}
                onChange={(e) => setFilterOption(e.target.value)}
                className="w-full bg-transparent font-unbounded text-xs font-medium text-[#393629] outline-none sm:w-48 dark:text-white [&>option]:bg-white [&>option]:text-[#393629] dark:[&>option]:bg-[#111118] dark:[&>option]:text-white"
              >
                <option value="">All Jobs</option>
                <option value="recent">Recently Posted</option>
                <option value="oldest">Oldest First</option>
                <option value="a-z">Title A-Z</option>
                <option value="z-a">Title Z-A</option>
              </select>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-[#fbf7ef] px-4 py-2.5 dark:border-white/10 dark:bg-[#050509]">
              <Search className="h-4 w-4 text-orange-500" />

              <input
                type="text"
                placeholder="Search job title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent font-mont text-sm text-[#393629] outline-none placeholder:text-[#8b8575] sm:w-72 dark:text-white dark:placeholder:text-gray-400"
              />
            </div>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-[#fbf7ef] p-10 text-center dark:border-white/10 dark:bg-[#050509]">
              <BriefcaseBusiness className="mx-auto mb-4 h-10 w-10 text-orange-500" />

              <h2 className="font-unbounded text-lg font-semibold">
                You haven't created any jobs yet
              </h2>

              <p className="mt-2 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                Start by posting your first job and manage all applications from
                here.
              </p>

              <button
                onClick={() => navigate("/admin/jobs/new-jobs")}
                className="mt-6 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#c65d3b] px-5 py-2.5 font-mont text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#b65335]"
              >
                <FilePlus2 className="h-4 w-4" />
                Post New Job
              </button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredJobs.map((job) => (
                <div
                  key={job._id}
                  className="group relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-lg shadow-orange-500/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 dark:border-white/10 dark:bg-[#111118]"
                >
                  <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl transition group-hover:bg-orange-500/20" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
                        <BriefcaseBusiness className="h-6 w-6 text-orange-500" />
                      </div>

                      <div>
                        <h2 className="line-clamp-1 font-unbounded text-lg font-semibold text-[#393629] dark:text-white">
                          {job.title}
                        </h2>

                        <p className="mt-1 line-clamp-1 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                          {job.company?.name || "Company not added"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* view job details */}
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="cursor-pointer rounded-xl p-2 transition hover:bg-[#f8f5ef] dark:hover:bg-white/5"
                      >
                        <Eye className="h-5 w-5 text-[#6b6658] dark:text-slate-400" />
                      </button>
                      {/* Applicants */}
                      <button
                        className="flex cursor-pointer items-center gap-1 rounded-xl p-2 transition hover:bg-[#f8f5ef] dark:hover:bg-white/5"
                        onClick={() =>
                          navigate(`/admin/jobs/${job._id}/applicants`)
                        }
                      >
                        <Users className="h-5 w-5 text-[#6b6658] dark:text-slate-400" />

                        <span className="text-sm font-medium text-[#6b6658] dark:text-slate-400">
                          {job?.applications?.length || 0}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-orange-500/10 px-3 py-1 font-mont text-xs font-semibold text-orange-600 dark:text-orange-300">
                      {job.jobType}
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 font-mont text-xs font-semibold text-[#393629] dark:bg-white/5 dark:text-slate-300">
                      {job.experienceLevel}+ Years
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 font-mont text-xs font-semibold text-[#393629] dark:bg-white/5 dark:text-slate-300">
                      {job.position} Openings
                    </span>
                  </div>

                  <p className="mt-5 line-clamp-3 font-mont text-sm leading-7 text-[#6b6658] dark:text-slate-400">
                    {job.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {(job.requirements || []).slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 px-3 py-1 font-mont text-xs text-[#6b6658] dark:border-white/10 dark:text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-white/10">
                    <div>
                      <p className="font-mont text-xs text-[#8b8575] dark:text-slate-500">
                        Location
                      </p>

                      <p className="mt-1 flex items-center gap-1 font-mont text-sm font-semibold text-[#393629] dark:text-white">
                        <MapPin className="h-4 w-4 text-orange-500" />
                        {job.location}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-mont text-xs text-[#8b8575] dark:text-slate-500">
                        Applied
                      </p>

                      <p className="mt-1 font-unbounded text-lg font-semibold text-orange-500">
                        {job.applications?.length || 0}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedJob && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
              <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl sm:p-7 dark:border-white/10 dark:bg-[#111118]">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 font-mont text-xs font-semibold text-orange-600 dark:text-orange-300">
                      <BriefcaseBusiness className="h-4 w-4" />
                      Job Details
                    </div>

                    <h2 className="font-unbounded text-2xl font-semibold text-[#393629] dark:text-white">
                      {selectedJob.title}
                    </h2>

                    <p className="mt-2 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                      {selectedJob.company?.name || "Company not added"}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedJob(null)}
                    className="rounded-xl p-2 transition hover:bg-[#f8f5ef] dark:hover:bg-white/5"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#fbf7ef] p-4 dark:bg-[#050509]">
                    <MapPin className="mb-2 h-5 w-5 text-orange-500" />
                    <p className="font-mont text-xs text-[#8b8575] dark:text-slate-500">
                      Location
                    </p>
                    <p className="mt-1 font-mont text-sm font-semibold">
                      {selectedJob.location}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fbf7ef] p-4 dark:bg-[#050509]">
                    <IndianRupee className="mb-2 h-5 w-5 text-orange-500" />
                    <p className="font-mont text-xs text-[#8b8575] dark:text-slate-500">
                      Salary
                    </p>
                    <p className="mt-1 font-mont text-sm font-semibold">
                      ₹{selectedJob.salary.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fbf7ef] p-4 dark:bg-[#050509]">
                    <BriefcaseBusiness className="mb-2 h-5 w-5 text-orange-500" />
                    <p className="font-mont text-xs text-[#8b8575] dark:text-slate-500">
                      Job Type
                    </p>
                    <p className="mt-1 font-mont text-sm font-semibold">
                      {selectedJob.jobType}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fbf7ef] p-4 dark:bg-[#050509]">
                    <UsersRound className="mb-2 h-5 w-5 text-orange-500" />
                    <p className="font-mont text-xs text-[#8b8575] dark:text-slate-500">
                      Applications
                    </p>
                    <p className="mt-1 font-mont text-sm font-semibold">
                      {selectedJob.applications?.length || 0} people applied
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fbf7ef] p-4 dark:bg-[#050509]">
                    <Building2 className="mb-2 h-5 w-5 text-orange-500" />
                    <p className="font-mont text-xs text-[#8b8575] dark:text-slate-500">
                      Positions
                    </p>
                    <p className="mt-1 font-mont text-sm font-semibold">
                      {selectedJob.position}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fbf7ef] p-4 dark:bg-[#050509]">
                    <BriefcaseBusiness className="mb-2 h-5 w-5 text-orange-500" />
                    <p className="font-mont text-xs text-[#8b8575] dark:text-slate-500">
                      Experience
                    </p>
                    <p className="mt-1 font-mont text-sm font-semibold">
                      {selectedJob.experienceLevel}+ years
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-[#fbf7ef] p-4 dark:bg-[#050509]">
                  <h3 className="font-unbounded text-sm font-semibold">
                    Description
                  </h3>
                  <p className="mt-3 font-mont text-sm leading-7 text-[#6b6658] dark:text-slate-400">
                    {selectedJob.description}
                  </p>
                </div>

                <div className="mt-6 rounded-2xl bg-[#fbf7ef] p-4 dark:bg-[#050509]">
                  <h3 className="font-unbounded text-sm font-semibold">
                    Requirements
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {(selectedJob.requirements || []).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-orange-500/10 px-3 py-1 font-mont text-xs font-semibold text-orange-600 dark:text-orange-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-[#fbf7ef] p-4 dark:bg-[#050509]">
                  <h3 className="font-unbounded text-sm font-semibold">
                    Responsibilities
                  </h3>

                  <div className="mt-4 space-y-3">
                    {(selectedJob?.responsibilities?.length
                      ? selectedJob.responsibilities
                      : [
                          "Collaborate effectively with team members and stakeholders.",
                          "Maintain clean, scalable, and high-quality work standards.",
                          "Meet project deadlines and contribute to overall team goals.",
                          "Continuously improve performance, usability, and reliability.",
                        ]
                    ).map((item: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-[#111118]"
                      >
                        <div className="flex pt-2">
                          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-lime-900" />
                        </div>

                        <p className="font-unbounded text-sm leading-6 text-[#6b6658] dark:text-slate-300">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="cursor-pointer rounded-full border border-slate-200 px-6 py-3 font-mont text-sm font-semibold transition hover:bg-[#f8f5ef] dark:border-white/10 dark:hover:bg-white/5"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
