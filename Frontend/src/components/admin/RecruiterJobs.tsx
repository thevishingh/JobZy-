import { Separator } from "@base-ui/react"
import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  CirclePlay,
  Sparkles,
  UsersRound,
} from "lucide-react"
import PostJobPage from "./PostJobPage"

const stats = [
  {
    value: "12+",
    label: "Companies Added",
  },
  {
    value: "28+",
    label: "Active Job Posts",
  },
  {
    value: "340+",
    label: "Applications Received",
  },
]

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
]

export default function RecruiterJobs() {
  return (
    <>
      <Separator />
      {/* hero section  */}
      <section className="relative overflow-hidden bg-[#fbf7ef] px-4 pt-20 text-[#393629] sm:px-6 lg:py-32 lg:px-8 dark:bg-[#050509] dark:text-white">
        <div className="pointer-events-none absolute -top-28 -left-24 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-[50%] h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* Left */}
          <div>
            <div className="relative mb-8 border-l-8 border-orange-500/80 pl-6">
              <div className="absolute top-0 -left-2 h-full w-2 bg-linear-to-b from-orange-500 via-orange-300 to-transparent" />

              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 font-mont text-xs font-semibold text-orange-600 dark:text-orange-300">
                <Sparkles className="h-4 w-4" />
                Recruiter Workspace
              </div>

              <h2 className="font-unbounded text-2xl font-semibold sm:text-3xl">
                Hire smarter with Jobzy
              </h2>

              <p className="mt-4 max-w-lg font-mont text-xl leading-8 text-[#5f5a4d] sm:text-2xl dark:text-slate-300">
                Manage companies, publish job openings, review applicants, and
                organize your hiring pipeline from one powerful dashboard.
              </p>

              <p className="mt-8 font-mont text-sm font-medium text-orange-500">
                Build teams faster. Hire with confidence.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-orange-500/20 blur-2xl" />

              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
                alt="Recruiter hiring workspace"
                className="relative h-72 w-full rounded-xl object-cover shadow-xl sm:h-80 lg:h-[294px]"
              />

              <div className="absolute top-5 left-5 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-md dark:bg-[#050509]/90">
                <Building2 className="mb-2 h-5 w-5 text-orange-500" />
                <p className="font-unbounded text-sm font-semibold">
                  Company Ready
                </p>
                <p className="font-mont text-xs text-[#6b6658] dark:text-slate-400">
                  Profile prepared for hiring
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {[
                "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900&auto=format&fit=crop",
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative h-44 overflow-hidden rounded-xl sm:h-40"
                >
                  <img
                    src={image}
                    alt="Recruiter dashboard preview"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="rounded-full bg-white/90 px-3 py-1 font-mont text-[10px] font-semibold text-[#393629] backdrop-blur">
                      Pipeline
                    </span>
                    <span className="rounded-full bg-[#393629] px-3 py-1 font-mont text-[10px] font-semibold text-white">
                      Hiring
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-2xl font-mont text-base leading-7 text-[#5f5a4d] dark:text-slate-300">
              Your recruiter workspace helps you keep hiring organized. Add
              company profiles, post roles, track applications, and connect with
              qualified candidates without losing focus.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-lg shadow-orange-500/5 backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  <h3 className="font-unbounded text-3xl font-semibold text-[#393629] dark:text-white">
                    {stat.value}
                  </h3>
                  <p className="mt-2 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {avatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt="Candidate avatar"
                      className="h-10 w-10 rounded-full border-2 border-[#fbf7ef] object-cover dark:border-[#050509]"
                    />
                  ))}
                </div>

                <p className="ml-4 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                  Qualified candidates waiting
                </p>
              </div>

              <button className="inline-flex items-center gap-3 font-mont text-sm font-semibold tracking-wide text-[#393629] dark:text-white">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-orange-500 text-orange-500">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-orange-500/20" />
                  <CirclePlay className="relative h-5 w-5" />
                </span>
                WATCH INTRO
              </button>
            </div>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c65d3b] px-5 py-3 font-mont text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#b65335]">
              Post a New Job
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
      <PostJobPage />
    </>
  )
}
