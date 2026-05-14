import {
  BriefcaseBusiness,
  Building2,
  CirclePlus,
  IndianRupee,
  Loader2,
  MapPin,
  Sparkles,
} from "lucide-react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "sonner"
import { JOB_API_END_POINT } from "@/utils/constant"
import { Highlighter } from "../ui/highlighter"
import useGetAllCompany from "@/hooks/useGetAllCompany"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"

type JobFormData = {
  title: string
  description: string
  requirements: string
  salary: string
  location: string
  jobType: string
  experienceLevel: string
  position: string
  companyId: string
  responsibilities: string
}

export default function UpdateJobPage() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JobFormData>({
    defaultValues: {
      title: "",
      description: "",
      requirements: "",
      salary: "",
      location: "",
      jobType: "",
      experienceLevel: "",
      position: "",
      companyId: "",
      responsibilities: "",
    },
  })

  // geting listed companie
  useGetAllCompany()

  const companies = useSelector(
    (store: RootState) => store.company.allCompanies
  )

  const onSubmit = async (data: JobFormData) => {
    try {
      const payload = {
        title: data.title,
        description: data.description,
        requirements: data.requirements,
        salary: Number(data.salary),
        experienceLevel: Number(data.experienceLevel),
        location: data.location,
        jobType: data.jobType,
        position: Number(data.position),
        companyId: data.companyId,
        responsibilities: data.responsibilities,
      }

      const res = await axios.post(`${JOB_API_END_POINT}/post`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })

      if (res.data.success) {
        toast.success(res.data.message || "Job created successfully")

        reset()

        navigate("/admin/jobs")
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to create job")
    }
  }

  return (
    <section className="min-h-screen bg-[#050509] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111118] p-6 shadow-2xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full border border-emerald-500/20 bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="pointer-events-none absolute top-10 left-10 h-96 w-96 rounded-full border border-emerald-400/20" />

          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-mont text-sm text-slate-200 backdrop-blur">
                <CirclePlus className="h-4 w-4" />
                Update job details
              </div>

              <h1 className="max-w-3xl font-unbounded text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                Create a{" "}
                <Highlighter action="highlight" color="red">
                  job post
                </Highlighter>
                &nbsp;that looks clean and
                <Highlighter action="highlight" color="green">
                  professional
                </Highlighter>
              </h1>

              <p className="mt-6 max-w-2xl font-mont text-base leading-7 text-slate-300">
                Update job title, company, location, salary, role details, and
                requirements in one place.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: BriefcaseBusiness,
                  title: "Job identity",
                  text: "Title, role type, and overview.",
                  color: "text-sky-400",
                },
                {
                  icon: Building2,
                  title: "Company details",
                  text: "Connect role with company.",
                  color: "text-emerald-400",
                },
                {
                  icon: MapPin,
                  title: "Location & salary",
                  text: "Help candidates understand fit.",
                  color: "text-rose-400",
                },
                {
                  icon: Sparkles,
                  title: "Requirements",
                  text: "Skills, experience, and duties.",
                  color: "text-violet-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <item.icon className={`mb-4 h-5 w-5 ${item.color}`} />
                  <h3 className="font-mont text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-mont text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 rounded-[2rem] border border-white/10 bg-[#111118] p-5 sm:p-8"
        >
          <h2 className="font-unbounded text-xl font-semibold">
            Update Job Form
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label className="font-mont text-sm font-semibold">
                Job Title
              </label>
              <input
                {...register("title", {
                  required: "Job title is required",
                })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050509] px-4 py-3 font-mont text-sm outline-none focus:border-orange-500"
                placeholder="Frontend Developer"
              />
              {errors.title && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-mont text-sm font-semibold">
                Select Company
              </label>

              <select
                {...register("companyId", {
                  required: "Please select a company",
                })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050509] px-4 py-3 font-mont text-sm outline-none focus:border-orange-500"
              >
                <option value="">Choose company</option>

                {companies.map((company) => (
                  <option key={company._id} value={company._id}>
                    {company.name}
                  </option>
                ))}
              </select>

              {errors.companyId && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.companyId.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-mont text-sm font-semibold">
                Location
              </label>
              <input
                {...register("location", {
                  required: "Location is required",
                })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050509] px-4 py-3 font-mont text-sm outline-none focus:border-orange-500"
                placeholder="Pune, India"
              />
              {errors.location && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.location.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-mont text-sm font-semibold">
                Job Type
              </label>
              <select
                {...register("jobType", {
                  required: "Job type is required",
                })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050509] px-4 py-3 font-mont text-sm outline-none focus:border-orange-500"
              >
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
              {errors.jobType && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.jobType.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-mont text-sm font-semibold">Salary</label>
              <div className="relative mt-2">
                <IndianRupee className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  {...register("salary", {
                    required: "Salary is required",
                  })}
                  className="w-full rounded-2xl border border-white/10 bg-[#050509] px-4 py-3 pl-10 font-mont text-sm outline-none focus:border-orange-500"
                  placeholder="6 LPA"
                />
              </div>
              {errors.salary && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.salary.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-mont text-sm font-semibold">
                Experience
              </label>
              <input
                type="number"
                {...register("experienceLevel", {
                  required: "Experience is required",
                })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050509] px-4 py-3 font-mont text-sm outline-none focus:border-orange-500"
                placeholder="1-3 years"
              />
              {errors.experienceLevel && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.experienceLevel.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-mont text-sm font-semibold">
                Positions
              </label>
              <input
                {...register("position", {
                  required: "Position count is required",
                })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050509] px-4 py-3 font-mont text-sm outline-none focus:border-orange-500"
                placeholder="2"
              />
              {errors.position && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.position.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-mont text-sm font-semibold">
                Requirements
              </label>
              <input
                {...register("requirements", {
                  required: "Requirements are required",
                })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050509] px-4 py-3 font-mont text-sm outline-none focus:border-orange-500"
                placeholder="React, TypeScript, Tailwind"
              />
              {errors.requirements && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.requirements.message}
                </p>
              )}
            </div>
            <div>
              <label className="font-mont text-sm font-semibold">
                Responsibilities
              </label>

              <textarea
                {...register("responsibilities", {
                  required: "Responsibilities are required",
                })}
                rows={4}
                placeholder="Build responsive UI, Integrate APIs, Improve performance"
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[#050509] px-4 py-3 font-mont text-sm outline-none focus:border-orange-500"
              />

              {errors.responsibilities && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.responsibilities.message}
                </p>
              )}
            </div>
            <div className="md:col-span-2">
              <label className="font-mont text-sm font-semibold">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 20,
                    message: "Description must be at least 20 characters",
                  },
                })}
                rows={5}
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[#050509] px-4 py-3 font-mont text-sm outline-none focus:border-orange-500"
                placeholder="Write job description..."
              />
              {errors.description && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => navigate(-1)}
              disabled={isSubmitting}
              className="cursor-pointer rounded-full border border-white/10 px-6 py-3 font-mont text-sm font-semibold text-white transition hover:bg-white/10 disabled:opacity-60"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#c65d3b] px-6 py-3 font-unbounded text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#b65335] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  Post Job
                  <Sparkles className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
