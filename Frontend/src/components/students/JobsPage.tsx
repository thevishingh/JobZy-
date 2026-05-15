import FilterCards from "@/components/students/FilterCards"
import SingleJobs from "@/components/students/SingleJobs"
import { motion } from "motion/react"
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react"
import { useMemo, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import useGetAllJobs from "@/hooks/useGetAllJobs"

// Faq's data
const faqs = [
  {
    question: "How do I create a Jobzy account?",
    answer:
      "Simply click on the Sign Up button, enter your details, and verify your email. Once registered, you can start exploring jobs, saving opportunities, and applying instantly.",
  },
  {
    question: "Are job listings on Jobzy verified?",
    answer:
      "Yes, Jobzy focuses on trusted job postings from verified companies, so candidates can apply with confidence.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "Click on Forgot Password on the login page, enter your registered email, and follow the instructions to securely reset your password.",
  },
  {
    question: "Is Jobzy free for job seekers?",
    answer:
      "Yes, Jobzy is free for job seekers. You can search, filter, save, and apply for jobs without any charges.",
  },
  {
    question: "Can I update my profile after creating an account?",
    answer:
      "Yes, you can update your profile details, resume, skills, and preferences anytime from your account dashboard to keep your applications up to date.",
  },
  {
    question: "How do I track the jobs I have applied for?",
    answer:
      "You can track your submitted applications directly from your dashboard, where Jobzy shows the jobs you applied to and their latest status whenever updates are available.",
  },
  {
    question: "Can I set job alerts for new opportunities?",
    answer:
      "Yes, Jobzy allows you to create personalized job alerts based on keywords, roles, and locations so you can get notified when relevant openings are posted.",
  },
]

export default function Jobs() {
  // get All jobs hooks
  useGetAllJobs()

  // Accessing jobs from Redux store
  const { allJobs } = useSelector((store: RootState) => store.job)

  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({})

  // filter logic
  const filteredJobs = useMemo(() => {
    return allJobs.filter((job: any) => {
      return Object.entries(selectedFilters).every(([key, value]) => {
        if (!value) return true

        const filterValue = value.toLowerCase()

        if (key === "location") {
          return job?.location?.toLowerCase().includes(filterValue)
        }

        if (key === "industry") {
          return job?.industry?.toLowerCase().includes(filterValue)
        }

        if (key === "jobType") {
          return job?.jobType?.toLowerCase().includes(filterValue)
        }

        if (key === "skills") {
          return (
            job?.title?.toLowerCase().includes(filterValue) ||
            job?.description?.toLowerCase().includes(filterValue) ||
            job?.requirements?.some((skill: string) =>
              skill.toLowerCase().includes(filterValue)
            )
          )
        }

        if (key === "company") {
          return job?.company?.name?.toLowerCase().includes(filterValue)
        }

        return true
      })
    })
  }, [allJobs, selectedFilters])

  const [showFilters, setShowFilters] = useState(false)
  const [visibleCount, setVisibleCount] = useState(12)

  const visibleJobs = filteredJobs.slice(0, visibleCount)
  const hasMoreJobs = visibleCount < filteredJobs.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12)
  }

  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-[#f6f1ea] text-[#393629] dark:bg-[#050509] dark:text-white">
        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
          >
            <span className="inline-flex rounded-full bg-[#c65d3b] px-3 py-1 font-mont text-xs font-semibold tracking-[0.18em] text-white uppercase">
              Student Job Portal
            </span>

            <h1 className="mt-6 font-unbounded text-4xl leading-[1.05] font-bold tracking-tight text-[#393629] sm:text-5xl lg:text-6xl dark:text-white">
              Find your next{" "}
              <span className="bg-linear-to-r from-orange-500 via-rose-500 to-red-500 bg-clip-text text-transparent">
                great role
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg font-mont text-base leading-8 text-[#6b6658] lg:mx-0 dark:text-slate-400">
              Explore verified jobs, compare company details, and apply faster
              with a simple experience built for students.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c65d3b] px-7 py-3.5 font-mont text-sm font-semibold text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-[#b65335]">
                Explore Jobs
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center -space-x-3 lg:justify-start">
              {[
                "https://cdn.flyonui.com/fy-assets/avatar/avatar-17.png",
                "https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png",
                "https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png",
              ].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="Jobzy user"
                  className="h-11 w-11 rounded-full border-2 border-[#f6f1ea] object-cover dark:border-[#050509]"
                />
              ))}

              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#f6f1ea] bg-[#111118] font-mont text-sm font-semibold text-white dark:border-[#050509] dark:bg-white dark:text-[#111118]">
                +1k
              </div>

              <p className="ml-5 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                Students applying with Jobzy
              </p>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[720px]">
              <div className="absolute inset-y-0 right-0 w-[82%] rounded-l-[4rem] bg-[#fde6dc] dark:bg-[#111118]" />

              <div className="relative min-h-[520px] sm:min-h-[620px]">
                {/* Yellow Ripple Behind Image */}
                <div className="pointer-events-none absolute top-[48%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl dark:bg-yellow-400/10" />

                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.7, 0.35] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute top-[48%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/30"
                />

                <motion.div
                  animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.6, 0.25] }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="pointer-events-none absolute top-[48%] left-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/30"
                />

                <motion.div
                  animate={{ scale: [1, 1.16, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  className="pointer-events-none absolute top-[48%] left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-300/35"
                />

                {/* Main Image */}
                <img
                  src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/hero/hero-17.png"
                  alt="Jobzy hiring platform hero"
                  className="absolute bottom-0 left-1/2 z-10 h-[460px] w-auto -translate-x-1/2 object-contain sm:h-[560px] lg:h-155"
                />

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 left-2 z-20 rounded-2xl border border-[#9aa66c]/40 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-[#181820]"
                >
                  <p className="font-unbounded text-xl font-bold text-[#7c8b46] dark:text-orange-300">
                    200+
                  </p>
                  <p className="font-mont text-xs text-[#6b6658] dark:text-slate-400">
                    Live Jobs
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 right-6 z-20 rounded-2xl border border-orange-300/50 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-[#181820]"
                >
                  <p className="font-unbounded text-xl font-bold text-orange-500">
                    8+
                  </p>
                  <p className="font-mont text-xs text-[#6b6658] dark:text-slate-400">
                    Hiring Tools
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-[36%] left-0 z-20 rounded-2xl border border-rose-300/60 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-[#181820]"
                >
                  <p className="font-unbounded text-xl font-bold text-rose-500">
                    1K+
                  </p>
                  <p className="font-mont text-xs text-[#6b6658] dark:text-slate-400">
                    Reviews
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-[42%] right-4 z-20 rounded-2xl border border-[#c65d3b]/40 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-[#181820]"
                >
                  <p className="font-unbounded text-xl font-bold text-[#c65d3b]">
                    800+
                  </p>
                  <p className="font-mont text-xs text-[#6b6658] dark:text-slate-400">
                    Recruiters
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* jobs-section */}
      <div className="min-h-screen overflow-hidden bg-[#fbf7ef] text-[#393629] dark:bg-[#050509] dark:text-white">
        <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute top-6 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 font-mont text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase dark:text-orange-300">
              Explore Opportunities
            </span>

            <h1 className="mt-5 font-unbounded text-3xl leading-tight font-extrabold tracking-tight text-[#393629] sm:text-4xl lg:text-5xl dark:text-white">
              Great careers start with the{" "}
              <span className="bg-linear-to-r from-orange-500 via-rose-500 to-yellow-400 bg-clip-text text-transparent">
                right role
              </span>
            </h1>
          </div>
        </section>

        <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
          {/* Mobile Filter Dropdown */}
          <div className="mb-5 lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 font-mont text-sm font-semibold text-[#393629] shadow-sm transition hover:border-orange-300 dark:border-white/10 dark:bg-[#111118] dark:text-white"
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-orange-500" />
                Filter Jobs
              </span>

              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>

            {showFilters && (
              <div className="mt-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-orange-500/10 dark:border-white/10 dark:bg-[#111118] dark:shadow-black/40">
                <FilterCards />
              </div>
            )}
          </div>

          <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
            {/* Desktop Filter Sidebar */}
            <aside className="hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-orange-500/10 lg:sticky lg:top-24 lg:block lg:h-fit dark:border-white/10 dark:bg-[#111118] dark:shadow-black/40">
              <div className="mb-5 border-b border-slate-200 pb-4 dark:border-white/10">
                <p className="font-unbounded text-base font-bold text-[#393629] dark:text-white">
                  Filters
                </p>
                <p className="mt-1 font-mont text-xs text-[#6b6658] dark:text-slate-400">
                  Narrow down your job search
                </p>
              </div>

              <FilterCards
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
              />
            </aside>

            {/* Jobs Panel */}
            <div className="min-w-0 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-orange-500/10 sm:p-5 dark:border-white/10 dark:bg-[#111118] dark:shadow-black/40">
              <div className="mb-5 flex flex-col gap-3 rounded-3xl border border-slate-200 bg-[#fbf7ef] p-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-[#050509]">
                <div>
                  <h2 className="font-mont text-lg font-bold text-[#393629] dark:text-white">
                    Recommended Jobs
                  </h2>

                  <p className="mt-1 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                    Showing {visibleJobs.length} of {filteredJobs.length}{" "}
                    opportunities for you
                  </p>
                </div>

                <button className="w-full cursor-pointer rounded-full bg-[#393629] px-5 py-2.5 font-mont text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c65d3b] sm:w-auto dark:bg-white dark:text-[#111118] dark:hover:bg-orange-300">
                  Latest Jobs
                </button>
              </div>

              {filteredJobs.length <= 0 ? (
                <div className="relative flex min-h-[350px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-[#fbf7ef] p-6 text-center dark:border-white/15 dark:bg-[#050509]">
                  {/* Background Glow */}
                  <div className="absolute top-10 h-40 w-40 rounded-full bg-orange-200/20 blur-3xl dark:bg-orange-500/5" />

                  {/* Ripple */}
                  <div className="absolute h-44 w-44 animate-pulse rounded-full border border-orange-200/40 dark:border-orange-500/10" />

                  {/* Lost Character */}
                  <div className="relative mb-7">
                    {/* Floating Circle */}
                    <div className="flex h-28 w-28 animate-[float_4s_ease-in-out_infinite] items-center justify-center rounded-full bg-white shadow-xl dark:bg-[#111118]">
                      <div className="relative">
                        {/* Eyes */}
                        <div className="flex items-center gap-5">
                          <div className="h-3 w-3 rounded-full bg-[#393629] dark:bg-white" />
                          <div className="h-3 w-3 rounded-full bg-[#393629] dark:bg-white" />
                        </div>

                        {/* Sad Mouth */}
                        <div className="mx-auto mt-4 h-3 w-8 rounded-b-full border-b-[3px] border-[#393629] dark:border-white" />

                        {/* Tear */}
                        <div className="absolute top-5 -right-2 h-4 w-2 animate-bounce rounded-full bg-sky-400 opacity-80" />
                      </div>
                    </div>

                    {/* Floating Docs */}
                    <div className="absolute top-2 -left-10 h-14 w-10 rotate-[-12deg] rounded-xl border border-[#eadfce] bg-white shadow-sm dark:border-white/10 dark:bg-[#111118]" />

                    <div className="absolute -right-10 bottom-0 h-16 w-11 rotate-[10deg] rounded-xl border border-[#eadfce] bg-white shadow-sm dark:border-white/10 dark:bg-[#111118]" />
                  </div>

                  {/* Content */}
                  <p className="font-unbounded text-xl font-bold tracking-tight text-[#393629] dark:text-white">
                    Oops... nothing matched
                  </p>

                  <p className="mt-3 max-w-sm font-mont text-sm leading-7 text-[#6b6658] dark:text-slate-400">
                    We searched everywhere but couldn’t find the right
                    opportunity for your current filters.
                  </p>

                  {/* Suggestion Pills */}
                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                    {["React", "Remote", "Frontend", "Banking"].map((item) => (
                      <button
                        key={item}
                        className="rounded-full border border-[#eadfce] bg-white px-4 py-2 font-unbounded text-xs text-[#5f5648] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md dark:border-white/10 dark:bg-[#111118] dark:text-slate-300"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="scrollbar-thin max-h-[72vh] overflow-x-hidden overflow-y-auto pr-2 scrollbar-thumb-orange-400/40 scrollbar-track-transparent hover:scrollbar-thumb-orange-400">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {visibleJobs.map((job) => (
                      <SingleJobs key={job._id} job={job} />
                    ))}
                  </div>

                  {hasMoreJobs && (
                    <div className="sticky bottom-0 mt-6 flex justify-center bg-white/80 py-4 backdrop-blur dark:bg-[#111118]/80">
                      <button
                        onClick={handleLoadMore}
                        className="rounded-full bg-[#393629] px-7 py-3 font-mont text-sm font-semibold text-white shadow-lg shadow-orange-500/10 transition hover:-translate-y-1 hover:bg-[#c65d3b] dark:bg-white dark:text-[#111118] dark:hover:bg-orange-300"
                      >
                        Load More Jobs
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      {/* stats */}
      <section className="relative overflow-hidden bg-[#fbf7ef] py-20 text-[#393629] dark:bg-[#050509] dark:text-white">
        <div className="pointer-events-none absolute right-2.5 bottom-10 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left Image / Visual */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-orange-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-orange-500/10 dark:border-white/10 dark:bg-[#111118] dark:shadow-black/40">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
                  alt="Jobzy job seeker and recruiter platform"
                  className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[420px]"
                />

                <div className="absolute right-6 bottom-6 left-6 rounded-3xl bg-[#393629] p-5 text-white shadow-xl dark:bg-white dark:text-[#111118]">
                  <p className="font-unbounded text-lg font-semibold">
                    One platform. Two journeys.
                  </p>
                  <p className="mt-1 font-mont text-sm text-white/70 dark:text-slate-500">
                    Helping candidates find jobs and recruiters hire faster.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 font-mont text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase dark:text-orange-300">
                Jobzy Impact
              </span>

              <h2 className="mt-5 max-w-2xl font-unbounded text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                Built for job seekers and modern hiring teams
              </h2>

              <p className="mt-5 max-w-2xl font-mont text-base leading-8 text-[#6b6658] dark:text-slate-400">
                Jobzy connects candidates with meaningful opportunities while
                helping recruiters manage jobs, companies, and applicants
                through a cleaner hiring experience.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  {
                    value: "1M+",
                    label: "Job seekers exploring career opportunities",
                    color: "text-red-500",
                  },
                  {
                    value: "50K+",
                    label: "Verified jobs across growing industries",
                    color: "text-orange-500",
                  },
                  {
                    value: "95%",
                    label: "Candidate and recruiter satisfaction rate",
                    color: "text-yellow-500",
                  },
                ].map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 dark:border-white/10 dark:bg-[#111118]"
                  >
                    <h3
                      className={`font-unbounded text-4xl font-extrabold ${stat.color}`}
                    >
                      {stat.value}
                    </h3>

                    <p className="mt-3 font-mont text-sm leading-6 text-[#6b6658] dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq's */}
      <section className="relative overflow-hidden bg-[#fbf7ef] py-20 text-[#393629] dark:bg-[#050509] dark:text-white">
        {/* Purple ripple background */}
        <div className="pointer-events-none absolute top-1/2 right-[-120px] h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-violet-400/20" />
        <div className="pointer-events-none absolute top-1/2 right-[-80px] h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-violet-400/20" />
        <div className="pointer-events-none absolute top-1/2 right-[-40px] h-[280px] w-[280px] -translate-y-1/2 rounded-full border border-violet-400/20" />
        <div className="pointer-events-none absolute top-1/2 right-[-120px] h-[520px] w-[520px] -translate-y-1/2 animate-pulse rounded-full border border-violet-400/20" />
        <div className="pointer-events-none absolute top-1/2 right-0 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
            {/* Left content */}
            <div className="lg:sticky lg:top-24">
              <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 font-mont text-xs font-semibold tracking-[0.18em] text-violet-600 uppercase dark:text-violet-300">
                Support
              </span>

              <h2 className="mt-5 max-w-xl font-unbounded text-3xl leading-tight font-bold sm:text-4xl lg:text-3xl">
                Questions before you apply?
              </h2>

              <p className="mt-5 max-w-lg font-mont text-base leading-8 text-[#6b6658] dark:text-slate-400">
                Find quick answers about job search, applications, recruiter
                reviews, and how Jobzy helps students move faster.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  {
                    value: "24/7",
                    label: "Access job opportunities anytime",
                  },
                  {
                    value: "Fast",
                    label: "Apply and track with a smoother flow",
                  },
                ].map((item) => (
                  <div
                    key={item.value}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-violet-500/10 dark:border-white/10 dark:bg-[#111118] dark:shadow-black/40"
                  >
                    <p className="font-unbounded text-2xl font-bold text-violet-600 dark:text-violet-300">
                      {item.value}
                    </p>
                    <p className="mt-2 font-mont text-sm leading-6 text-[#6b6658] dark:text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ card */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-violet-500/10 sm:p-6 dark:border-white/10 dark:bg-[#111118] dark:shadow-black/40">
              <Accordion
                type="single"
                collapsible
                defaultValue="item-0"
                className="space-y-4"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-[#fbf7ef] px-5 shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-md dark:border-white/10 dark:bg-[#050509]"
                  >
                    <AccordionTrigger className="cursor-pointer py-5 text-left font-mont text-base font-semibold text-[#393629] no-underline transition-colors hover:text-violet-600 hover:no-underline dark:text-white dark:hover:text-violet-300">
                      {faq.question}
                    </AccordionTrigger>

                    <AccordionContent className="pb-5 font-mont text-sm leading-7 text-[#6b6658] dark:text-slate-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* why us */}
      <section className="relative overflow-hidden bg-[#fbf7ef] py-20 text-[#393629] dark:bg-[#050509] dark:text-white">
        <div className="pointer-events-none absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 font-mont text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase dark:text-orange-300">
              Why Jobzy
            </span>

            <h2 className="mt-5 font-unbounded text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
              One platform for job seekers and recruiters
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-mont text-base leading-8 text-[#6b6658] dark:text-slate-400">
              Jobzy helps candidates discover better opportunities and gives
              recruiters a cleaner way to manage jobs, companies, and
              applicants.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Search,
                title: "Smart Job Discovery",
                desc: "Find verified roles that match skills, goals, and career direction.",
              },
              {
                icon: BriefcaseBusiness,
                title: "Recruiter Workflow",
                desc: "Post jobs, review applicants, and manage hiring from one dashboard.",
              },
              {
                icon: Building2,
                title: "Company Profiles",
                desc: "Help companies build trust and attract the right candidates faster.",
              },
              {
                icon: ShieldCheck,
                title: "Trusted Experience",
                desc: "A clean, reliable platform designed for students and hiring teams.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10 dark:border-white/10 dark:bg-[#111118] dark:hover:border-orange-400/40 dark:hover:shadow-black/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="font-unbounded text-base font-semibold text-[#393629] dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 font-mont text-sm leading-6 text-[#6b6658] dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* teams */}
      <section className="relative overflow-hidden bg-[#fbf7ef] py-20 text-[#393629] md:py-24 dark:bg-[#050509] dark:text-white">
        <div className="pointer-events-none absolute top-16 right-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-10 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 font-mont text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase dark:text-orange-300">
                Career Growth
              </span>

              <h2 className="mt-5 font-unbounded text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl">
                Helping students move closer to{" "}
                <span className="bg-linear-to-r from-orange-500 via-rose-500 to-yellow-400 bg-clip-text text-transparent">
                  better careers
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl font-mont text-base leading-8 text-[#6b6658] lg:mx-0 dark:text-slate-400">
                Jobzy connects job seekers with verified opportunities and gives
                them a smoother way to discover roles, review companies, and
                apply with confidence.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "50K+", label: "Jobs explored" },
                  { value: "12K+", label: "Applications sent" },
                  { value: "800+", label: "Hiring companies" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#111118]"
                  >
                    <p className="font-unbounded text-2xl font-bold text-orange-500">
                      {item.value}
                    </p>
                    <p className="mt-1 font-mont text-xs text-[#6b6658] dark:text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Images */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[3rem] bg-orange-500/10 blur-3xl" />

              <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  "https://pagedone.io/asset/uploads/1696238644.png",
                  "https://pagedone.io/asset/uploads/1696238665.png",
                  "https://pagedone.io/asset/uploads/1696238684.png",
                  "https://pagedone.io/asset/uploads/1696238702.png",
                  "https://pagedone.io/asset/uploads/1696238720.png",
                  "https://pagedone.io/asset/uploads/1696238737.png",
                ].map((src, index) => (
                  <div
                    key={src}
                    className={`overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-xl shadow-orange-500/10 dark:border-none dark:bg-transparent dark:shadow-none ${
                      index === 0 || index === 2 ? "sm:mt-14" : ""
                    } ${index === 4 ? "sm:-mt-14" : ""}`}
                  >
                    <img
                      src={src}
                      alt="Jobzy career growth"
                      className="h-52 w-full rounded-[1.5rem] object-cover sm:h-56 lg:h-64"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative overflow-hidden bg-[#fbf7ef] px-4 py-14 dark:bg-[#050509]">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-[#111118] px-6 py-10 shadow-2xl shadow-orange-500/10 sm:px-10 dark:border-white/10">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Left */}
            <div className="max-w-2xl text-center lg:text-left">
              <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 font-mont text-[11px] font-semibold tracking-[0.18em] text-orange-300 uppercase">
                Jobzy Platform
              </span>

              <h2 className="mt-4 font-unbounded text-2xl leading-tight font-bold text-white sm:text-3xl">
                Find better jobs. Hire better talent.
              </h2>

              <p className="mt-3 font-mont text-sm leading-7 text-slate-400 sm:text-base">
                Built for students, professionals, and recruiters looking for
                faster hiring experiences.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="rounded-2xl bg-orange-500 px-6 py-3 font-mont text-sm font-semibold text-white transition hover:bg-orange-600">
                Explore Jobs
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-mont text-sm font-semibold text-white transition hover:bg-white/10">
                Build Your Career
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
