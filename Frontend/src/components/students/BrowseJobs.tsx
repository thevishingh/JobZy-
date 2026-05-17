import SingleJobs from "./SingleJobs"
import { Search, X } from "lucide-react"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import BrowserJobsHeroSection from "./BrowserJobsHeroSection"
import { useMemo, useState } from "react"
import { Highlighter } from "../ui/highlighter"
import { Separator } from "@base-ui/react"

export default function BrowseJobs() {
  const { allJobs = [] } = useSelector((store: RootState) => store.job)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredJobs = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()

    if (!query) return allJobs

    return allJobs.filter((job: any) =>
      job?.title?.toLowerCase().includes(query)
    )
  }, [allJobs, searchQuery])
  return (
    <>
      {/* hero section */}
      <BrowserJobsHeroSection />
      {/* jobs showcase */}
      <section className="relative w-full overflow-hidden bg-top px-4 sm:px-6 sm:py-10 lg:px-8 dark:bg-[#050509]">
        {/* Ripple Background */}
        <div className="pointer-events-none absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full border border-orange-300/30" />
        <div className="pointer-events-none absolute top-16 left-1/2 h-96 w-96 -translate-x-1/2 animate-ping rounded-full border border-orange-300/20" />
        <div className="relative mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col items-start justify-center sm:items-center">
            <h1 className="mb-6 w-full text-left font-unbounded text-[2.7rem] leading-[1.05] font-semibold tracking-tight text-gray-900 sm:text-center md:text-7xl dark:text-white">
              Discover jobs that match your skills,{" "}
              <Highlighter action="highlight" color="purple">
                goals, and future
              </Highlighter>
            </h1>

            <p className="max-w-2xl text-left font-unbounded text-sm leading-7 text-gray-500 sm:text-center sm:text-base dark:text-slate-400">
              Search roles, explore opportunities, and find the next step in
              your career journey.
            </p>
          </div>
        </div>
      </section>
      {/* Jobs cards */}
      <section className="pt-4 pb-20 dark:bg-[#050509]">
        <div className="relative mx-auto w-[80%]">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mont text-sm font-medium text-red-600">
                Explore Opportunities
              </p>

              <h1 className="font-unbounded text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                {filteredJobs.length} &nbsp;
                <Highlighter action="underline" color="purple">
                  Jobs Available
                </Highlighter>
              </h1>

              <p className="mt-2 font-mont text-sm text-gray-500 dark:text-slate-400">
                {searchQuery
                  ? `Showing opportunities related to "${searchQuery}"`
                  : "Discover curated opportunities tailored for ambitious professionals."}
              </p>
            </div>

            {/* Search Box */}
            <div className="w-full rounded-full border border-orange-100 bg-white p-2 shadow-xl shadow-orange-500/10 lg:max-w-md dark:border-white/10 dark:bg-[#111118]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                  <Search className="h-5 w-5" />
                </div>

                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                  placeholder="Search jobs eg. Frontend Developer..."
                  className="w-full bg-transparent font-mont text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-slate-500"
                />

                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mr-2 rounded-full p-2 text-gray-400 transition hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-white/10 dark:hover:text-orange-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <Separator className="m-2 border-[0.1px] bg-red-500 dark:bg-green-900" />

          {filteredJobs.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {filteredJobs.map((job: any) => (
                <div
                  key={job._id}
                  className="group relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-1 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 dark:border-white/10 dark:bg-[#111118]"
                >
                  {/* Gradient Hover Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-violet-500/0 to-orange-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Ripple Glow */}
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-orange-400/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

                  {/* Content */}
                  <div className="relative rounded-[1.7rem] bg-white dark:bg-[#111118]">
                    <SingleJobs job={job} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-[2rem] border border-[#eadfce] bg-linear-to-b from-white to-[#fcfaf7] p-12 text-center shadow-xl shadow-orange-500/5 dark:border-white/10 dark:from-[#111118] dark:to-[#0b0b12]">
              {/* Background Glow */}
              <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-300/10 blur-3xl dark:bg-orange-400/5" />

              {/* Floating Blur */}
              <div className="absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-emerald-200/20 blur-3xl dark:bg-emerald-400/5" />

              <div className="relative mx-auto flex max-w-md flex-col items-center">
                {/* Animated Illustration */}
                <div className="relative mb-8 flex h-40 w-40 items-center justify-center">
                  {/* Outer Ripple */}
                  <div className="absolute h-36 w-36 animate-pulse rounded-full border border-orange-200/40 dark:border-orange-400/10" />

                  <div className="absolute h-28 w-28 rounded-full border border-dashed border-[#d9ccb8] dark:border-white/10" />

                  {/* Floating Cards */}
                  <div className="absolute top-10 -left-2 h-16 w-12 rotate-[-8deg] rounded-2xl border border-[#ece3d5] bg-[#faf7f2] shadow-sm transition-transform duration-500 hover:-translate-y-1 dark:border-white/10 dark:bg-white/3" />

                  <div className="absolute top-4 right-1 h-20 w-14 rotate-10 rounded-[18px] border border-[#e8dece] bg-white shadow-[0_10px_25px_rgba(28,22,15,0.08)] transition-transform duration-500 hover:-translate-y-1 dark:border-white/10 dark:bg-white/4">
                    <div className="px-3 py-4">
                      <div className="h-2 w-8 rounded-full bg-[#ddd2bf] dark:bg-white/10" />
                      <div className="mt-2 h-2 w-6 rounded-full bg-[#e9dfd0] dark:bg-white/10" />
                      <div className="mt-2 h-2 w-9 rounded-full bg-[#f0e8dc] dark:bg-white/10" />
                    </div>
                  </div>

                  {/* Main Search Icon */}
                  <div className="relative z-10 flex h-20 w-20 animate-[float_3.2s_ease-in-out_infinite] items-center justify-center rounded-full bg-linear-to-br from-[#163d35] to-[#215247] shadow-[0_20px_40px_rgba(22,61,53,0.25)]">
                    <Search className="h-8 w-8 text-white" />
                  </div>

                  {/* Status Dot */}
                  <div className="absolute right-7 bottom-8 h-3.5 w-3.5 animate-pulse rounded-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 font-mont text-xs font-semibold tracking-[0.2em] text-orange-700 uppercase dark:border-orange-500/10 dark:bg-orange-500/10 dark:text-orange-300">
                    No Opportunities Found
                  </div>

                  <h3 className="font-unbounded text-2xl tracking-tight text-[#221d16] dark:text-white">
                    We couldn’t find a matching role
                  </h3>

                  <p className="mx-auto max-w-sm font-mont text-sm leading-7 text-[#7a7062] dark:text-slate-400">
                    We searched across available opportunities but couldn’t find
                    a match for{" "}
                    <span className="font-semibold text-[#163d35] dark:text-emerald-300">
                      “{searchQuery}”
                    </span>
                    .
                  </p>
                </div>

                {/* Suggestions */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  {["Frontend Developer", "React Developer", "UI Designer"].map(
                    (suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setSearchQuery(suggestion)}
                        className="rounded-full border border-[#eadfce] bg-white px-4 py-2 font-mont text-sm text-[#5d5549] transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 dark:border-white/10 dark:bg-white/3 dark:text-slate-300 dark:hover:bg-white/6"
                      >
                        {suggestion}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
