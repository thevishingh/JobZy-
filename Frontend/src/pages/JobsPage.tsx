import FilterCards from "@/components/shared/FilterCards"
import SingleJobs from "@/components/shared/singleJobs"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { BriefcaseBusiness, SearchCheck, Zap } from "lucide-react"
import { SlidersHorizontal, ChevronDown } from "lucide-react"
import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"

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
]

export default function Jobs() {
  // Accessing jobs from Redux store
  const { allJobs } = useSelector((store: RootState) => store.job)

  const [showFilters, setShowFilters] = useState(false)
  const [visibleCount, setVisibleCount] = useState(12)

  const visibleJobs = allJobs.slice(0, visibleCount)
  const hasMoreJobs = visibleCount < allJobs.length

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
            <span className="inline-flex rounded-full bg-[#c65d3b] px-3 py-1 font-mont text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Student Job Portal
            </span>

            <h1 className="mt-6 font-unbounded text-4xl font-bold leading-[1.05] tracking-tight text-[#393629] sm:text-5xl lg:text-6xl dark:text-white">
              Find your next{" "}
              <span className="bg-linear-to-r from-orange-500 via-rose-500 to-red-500 bg-clip-text text-transparent">
                great role
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg font-mont text-base leading-8 text-[#6b6658] lg:mx-0 dark:text-slate-400">
              Explore verified jobs, compare company details, and apply faster with a
              simple experience built for students.
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
                <div className="pointer-events-none absolute left-1/2 top-[48%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl dark:bg-yellow-400/10" />

                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.7, 0.35] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="pointer-events-none absolute left-1/2 top-[48%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/30"
                />

                <motion.div
                  animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.6, 0.25] }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="pointer-events-none absolute left-1/2 top-[48%] h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/30"
                />

                <motion.div
                  animate={{ scale: [1, 1.16, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  className="pointer-events-none absolute left-1/2 top-[48%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-300/35"
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
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-2 top-8 z-20 rounded-2xl border border-[#9aa66c]/40 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-[#181820]"
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
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-6 top-10 z-20 rounded-2xl border border-orange-300/50 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-[#181820]"
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
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-0 top-[36%] z-20 rounded-2xl border border-rose-300/60 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-[#181820]"
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
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-4 top-[42%] z-20 rounded-2xl border border-[#c65d3b]/40 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-[#181820]"
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
      <div className="min-h-screen bg-bottom">
        <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
          <h1 className="mx-auto max-w-4xl bg-linear-to-r from-red-500 via-orange-700 to-yellow-400 bg-clip-text text-center font-unbounded text-2xl leading-tight font-extrabold tracking-tight text-transparent sm:text-3xl lg:text-5xl">
            Great careers start with the right opportunity
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-center font-mont text-sm leading-6 text-gray-700 sm:text-base">
            Discover roles that match your skills, goals, and career direction.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Mobile Filter Dropdown */}
          <div className="mb-5 lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex w-full items-center justify-between rounded-2xl border border-black/10 bg-white/60 px-4 py-3 font-mont text-sm font-semibold text-gray-900 shadow-sm backdrop-blur-md"
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filter Jobs
              </span>

              <ChevronDown
                className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""
                  }`}
              />
            </button>

            {showFilters && (
              <div className="mt-3 rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm backdrop-blur-md">
                <FilterCards />
              </div>
            )}
          </div>

          <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
            {/* Desktop Filter Sidebar */}
            <aside className="hidden rounded-3xl border border-black/10 bg-white/40 p-4 shadow-sm backdrop-blur-md lg:sticky lg:top-24 lg:block lg:h-fit">
              <FilterCards />
            </aside>

            {/* Jobs Panel */}
            <div className="min-w-0 rounded-3xl border border-black/10 bg-white/25 p-4 shadow-sm backdrop-blur-md sm:p-5">
              <div className="mb-5 flex flex-col gap-3 border-b border-black/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-unbounded text-lg font-bold text-gray-900">
                    Recommended Jobs
                  </h2>

                  <p className="mt-1 font-mont text-sm text-gray-600">
                    Showing {visibleJobs.length} of {allJobs.length}{" "}
                    opportunities for you
                  </p>
                </div>

                <button className="w-full rounded-full bg-black px-4 py-2 font-mont text-sm font-medium text-white transition hover:bg-gray-800 sm:w-auto">
                  Latest Jobs
                </button>
              </div>

              {allJobs.length <= 0 ? (
                <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white/70 text-center">
                  <p className="font-unbounded text-lg font-bold text-gray-900">
                    No jobs found
                  </p>

                  <p className="mt-2 max-w-sm font-mont text-sm text-gray-500">
                    Try changing your filters or search with different keywords.
                  </p>
                </div>
              ) : (
                <div className="lg:max-h-[72vh] lg:overflow-y-auto lg:pr-2">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {visibleJobs.map((job) => (
                      <SingleJobs key={job._id} job={job} />
                    ))}
                  </div>

                  {hasMoreJobs && (
                    <div className="mt-6 flex justify-center pb-2">
                      <button
                        onClick={handleLoadMore}
                        className="rounded-full bg-black px-6 py-2.5 font-mont text-sm font-medium text-white transition hover:bg-gray-800"
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
      {/* why choose us */}
      <section className="bg-top py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-mont text-sm font-semibold tracking-wide text-red-500 uppercase lg:text-base">
            Our Values
          </p>

          <h2 className="font-unbounded text-3xl font-extrabold text-zinc-900 lg:text-4xl">
            Why Choose Jobzy?
          </h2>

          <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
            <div className="rounded-2xl bg-zinc-100 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-white text-red-500">
                <SearchCheck className="size-6" />
              </span>

              <h3 className="mb-2 font-unbounded text-xl font-semibold text-zinc-900">
                Smart Job Matching
              </h3>

              <p className="font-mont leading-7 text-zinc-600">
                Discover opportunities that match your skills, experience, and
                career goals without wasting time on irrelevant listings.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-white text-orange-500">
                <BriefcaseBusiness className="size-6" />
              </span>

              <h3 className="mb-2 font-unbounded text-xl font-semibold text-zinc-900">
                Verified Companies
              </h3>

              <p className="font-mont leading-7 text-zinc-600">
                Apply confidently to trusted companies with clear job details,
                transparent roles, and a smoother hiring experience.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-white text-yellow-500">
                <Zap className="size-6" />
              </span>

              <h3 className="mb-2 font-unbounded text-xl font-semibold text-zinc-900">
                Faster Applications
              </h3>

              <p className="font-mont leading-7 text-zinc-600">
                Save time with a clean, simple job search flow designed to help
                candidates apply faster and move forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* faq's */}
      {/* <section className="py-16 transition-colors duration-300 dark:bg-zinc-950"> */}
      <section className="py-16 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-red-100/60 blur-2xl dark:bg-red-500/10" />
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <img
                  src="https://pagedone.io/asset/uploads/1696230182.png"
                  alt="Jobzy FAQ support"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="mx-auto max-w-xl lg:mx-0">
                <div className="mb-8">
                  <span className="inline-flex rounded-full bg-red-50 px-4 py-1 text-sm font-semibold tracking-wide text-red-500 dark:bg-red-500/10 dark:text-red-400">
                    Support
                  </span>

                  <h2 className="mt-4 text-3xl leading-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
                    Frequently Asked Questions
                  </h2>

                  <p className="mt-4 text-base leading-7 text-gray-500 dark:text-zinc-400">
                    Everything you need to know before starting your job search
                    with Jobzy.
                  </p>
                </div>

                <div className="space-y-4">
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
                        className="overflow-hidden rounded-2xl border border-zinc-200 bg-white px-5 shadow-sm transition-all duration-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                      >
                        <AccordionTrigger className="cursor-pointer py-5 text-left text-base font-semibold text-gray-800 no-underline transition-colors hover:text-red-500 hover:no-underline dark:text-zinc-100 dark:hover:text-red-400">
                          {faq.question}
                        </AccordionTrigger>

                        <AccordionContent className="pb-5 text-sm leading-7 text-gray-500 dark:text-zinc-400">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tems */}
      <section className="bg-top py-20 md:py-24">
        <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-center font-unbounded text-3xl leading-tight font-extrabold text-gray-900 sm:text-4xl lg:text-left lg:text-5xl">
                Empowering careers that reach new heights
              </h2>

              <p className="mt-4 text-center font-mont text-base text-gray-600 lg:text-left lg:text-lg">
                Thousands of professionals have transformed their careers with
                Jobzy landing roles at top companies and growing into impactful
                positions.
              </p>

              <button className="mx-auto mt-8 block w-70 rounded-full bg-black px-8 py-3 text-center font-mont text-base font-semibold text-white transition hover:bg-red-600 lg:mx-0">
                Explore Opportunities
              </button>
            </div>

            {/* Right Images */}
            <div className="mt-12 w-full max-w-2xl lg:mt-0 lg:w-1/2">
              <div className="grid grid-cols-1 gap-6 min-[450px]:grid-cols-2 md:grid-cols-3">
                <img
                  src="https://pagedone.io/asset/uploads/1696238644.png"
                  className="mx-auto h-56 w-44 rounded-2xl object-cover md:mt-20"
                />

                <img
                  src="https://pagedone.io/asset/uploads/1696238665.png"
                  className="mx-auto h-56 w-44 rounded-2xl object-cover"
                />

                <img
                  src="https://pagedone.io/asset/uploads/1696238684.png"
                  className="mx-auto h-56 w-44 rounded-2xl object-cover md:mt-20"
                />

                <img
                  src="https://pagedone.io/asset/uploads/1696238702.png"
                  className="mx-auto h-56 w-44 rounded-2xl object-cover"
                />

                <img
                  src="https://pagedone.io/asset/uploads/1696238720.png"
                  className="mx-auto h-56 w-44 rounded-2xl object-cover md:-mt-20"
                />

                <img
                  src="https://pagedone.io/asset/uploads/1696238737.png"
                  className="mx-auto h-56 w-44 rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* stats */}
      <section className="bg-bottom py-16 md:py-20">
        <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between xl:gap-14">
            {/* Stat 1 */}
            <div className="w-full lg:w-1/3">
              <div className="mb-4 text-center font-unbounded text-4xl font-extrabold text-red-500 sm:text-5xl">
                1M+
              </div>
              <p className="text-center font-mont text-base leading-7 text-gray-600 sm:text-lg">
                Job seekers actively exploring opportunities on Jobzy
              </p>
            </div>

            {/* Stat 2 */}
            <div className="w-full lg:w-1/3">
              <div className="mb-4 text-center font-unbounded text-4xl font-extrabold text-orange-500 sm:text-5xl">
                50K+
              </div>
              <p className="text-center font-mont text-base leading-7 text-gray-600 sm:text-lg">
                Verified job listings from trusted companies across industries
              </p>
            </div>

            {/* Stat 3 */}
            <div className="w-full lg:w-1/3">
              <div className="mb-4 text-center font-unbounded text-4xl font-extrabold text-yellow-500 sm:text-5xl">
                95%
              </div>
              <p className="text-center font-mont text-base leading-7 text-gray-600 sm:text-lg">
                User satisfaction rate from candidates finding relevant jobs
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
