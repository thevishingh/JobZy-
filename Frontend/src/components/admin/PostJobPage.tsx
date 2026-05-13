import {
  BriefcaseBusiness,
  FilePlus2,
  Search,
  SlidersHorizontal,
  Eye,
  Pencil,
  Building2,
  MapPin,
  IndianRupee,
  UsersRound,
  X,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Highlighter } from "../ui/highlighter"

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

const jobs: Job[] = [
  {
    _id: "1",
    title: "Frontend Developer",
    description:
      "We are looking for a skilled Frontend Developer who can build modern, responsive, and scalable user interfaces using React and Tailwind CSS.",
    requirements: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    salary: 800000,
    experienceLevel: 2,
    location: "Pune, India",
    jobType: "full-time",
    position: 3,
    company: {
      _id: "c1",
      name: "Jobzy Technologies",
      location: "Pune",
    },
    created_by: "recruiter_id",
    applications: ["a1", "a2", "a3", "a4"],
    createdAt: "2026-05-10",
    updatedAt: "2026-05-12",
  },
  {
    _id: "2",
    title: "Backend Engineer",
    description:
      "Join our backend team to build secure REST APIs, database models, authentication flows, and production-ready server-side features.",
    requirements: ["Node.js", "Express.js", "MongoDB", "JWT"],
    salary: 1000000,
    experienceLevel: 3,
    location: "Bengaluru, India",
    jobType: "contract",
    position: 2,
    company: {
      _id: "c2",
      name: "Nexora Labs",
      location: "Bengaluru",
    },
    created_by: "recruiter_id",
    applications: ["a1", "a2"],
    createdAt: "2026-05-08",
    updatedAt: "2026-05-11",
  },
  {
    _id: "3",
    title: "MERN Stack Developer",
    description:
      "Build full-stack web applications using MongoDB, Express, React, and Node.js with clean architecture and responsive UI.",
    requirements: ["MongoDB", "Express.js", "React.js", "Node.js"],
    salary: 900000,
    experienceLevel: 2,
    location: "Hyderabad, India",
    jobType: "full-time",
    position: 4,
    company: {
      _id: "c3",
      name: "CodeNest Systems",
      location: "Hyderabad",
    },
    created_by: "recruiter_id",
    applications: ["a1", "a2", "a3"],
    createdAt: "2026-05-13",
    updatedAt: "2026-05-13",
  },
]

export default function PostJobPage() {
  const navigate = useNavigate()
  const [companyName, setCompanyName] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [filterOption, setFilterOption] = useState("")
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const filteredJobs = [...jobs]
    .filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
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

            <Dialog>
              <DialogTrigger asChild>
                <button className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#c65d3b] px-5 py-2.5 font-mont text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#b65335] sm:w-auto">
                  <FilePlus2 className="h-4 w-4" />
                  Post New Job
                </button>
              </DialogTrigger>

              <DialogContent className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-0 text-[#393629] shadow-2xl sm:max-w-lg dark:border-white/10 dark:bg-[#111118] dark:text-white">
                <div className="relative">
                  <div className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-orange-500/20 blur-3xl" />

                  <DialogHeader className="relative border-b border-slate-200 px-6 pt-6 pb-5 dark:border-white/10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                      <FilePlus2 className="h-5 w-5" />
                    </div>

                    <DialogTitle className="font-unbounded text-xl">
                      Create New Job
                    </DialogTitle>

                    <DialogDescription className="mt-2 font-mont text-sm leading-6 text-[#6b6658] dark:text-slate-400">
                      Enter the company name before creating a job post.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-3 px-6 py-6">
                    <Label className="font-unbounded text-sm font-semibold capitalize">
                      <Highlighter action="underline" color="yellow">
                        Job Title
                      </Highlighter>
                    </Label>

                    <Input
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Enter Job Title (e.g. Frontend Developer)"
                      className="h-12 rounded-2xl border-slate-200 bg-[#fbf7ef] font-mont dark:border-white/10 dark:bg-[#050509]"
                    />
                  </div>

                  <div className="flex flex-col-reverse gap-3 border-t border-slate-200 px-6 py-5 sm:flex-row sm:justify-end dark:border-white/10">
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-11 cursor-pointer rounded-full px-5 font-unbounded text-sm"
                      >
                        Cancel
                      </Button>
                    </DialogTrigger>

                    <Button
                      onClick={() => {
                        if (!companyName.trim()) return

                        navigate(
                          `/admin/jobs/details-update?company=${companyName}`
                        )
                      }}
                      className="h-11 cursor-pointer rounded-full bg-[#c65d3b] px-5 font-unbounded text-sm font-semibold text-white hover:bg-[#b65335]"
                    >
                      <FilePlus2 className="mr-2 h-4 w-4" />
                      Post New Job
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="rounded-xl p-2 transition hover:bg-[#f8f5ef] dark:hover:bg-white/5"
                    >
                      <Eye className="h-5 w-5 text-[#6b6658] dark:text-slate-400" />
                    </button>

                    <button
                      onClick={() =>
                        navigate(`/admin/jobs/details-update/${job._id}`)
                      }
                      className="rounded-xl p-2 transition hover:bg-[#f8f5ef] dark:hover:bg-white/5"
                    >
                      <Pencil className="h-5 w-5 text-[#6b6658] dark:text-slate-400" />
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
                  {job.requirements.slice(0, 3).map((skill) => (
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
                      {job.applications.length}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
                      {selectedJob.applications.length} people applied
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
                    {selectedJob.requirements.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-orange-500/10 px-3 py-1 font-mont text-xs font-semibold text-orange-600 dark:text-orange-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="rounded-full border border-slate-200 px-6 py-3 font-mont text-sm font-semibold transition hover:bg-[#f8f5ef] dark:border-white/10 dark:hover:bg-white/5"
                  >
                    Close
                  </button>

                  <button
                    onClick={() =>
                      navigate(`/admin/jobs/details-update/${selectedJob._id}`)
                    }
                    className="rounded-full bg-[#c65d3b] px-6 py-3 font-mont text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#b65335]"
                  >
                    Update Job
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
