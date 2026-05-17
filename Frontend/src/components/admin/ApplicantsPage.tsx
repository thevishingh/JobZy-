import { ArrowRight, ChevronUp } from "lucide-react"
import { Highlighter } from "../ui/highlighter"
import ApplicantsTable from "./ApplicantsTable"
import { useEffect } from "react"
import axios from "axios"
import { APPLICATION_API_END_POINT } from "@/utils/constant"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setApplicants } from "@/redux/applicationSlice"
import { type RootState } from "@/redux/store"

const ApplicantsPage = () => {
  // getting id
  const params = useParams()
  const dispatch = useDispatch()
  const { applicants } = useSelector((store: RootState) => store.application)
  // fetching Applicants
  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const response = await axios.get(
          `${APPLICATION_API_END_POINT}/applicant/${params.id}`,
          { withCredentials: true }
        )

        console.log(response.data)

        if (response.data.success) {
          dispatch(setApplicants(response.data.job.applications))
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchAllApplicants()
  }, [dispatch, params.id])
  return (
    <>
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-10 lg:pt-32 dark:bg-[#050509]">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-7xl text-center">
            <h1 className="font-unbounded text-3xl leading-tight font-bold text-[#2f2b3a] sm:text-4xl lg:text-5xl dark:text-white">
              Review Talent,
              <Highlighter action="highlight" color="#5B7E3C">
                <span className="ml-2">Track Applications</span>
              </Highlighter>{" "}
              <br />
              and Build Your
              <Highlighter action="underline" color="red">
                <span className="ml-2">Hiring Team</span>
              </Highlighter>
            </h1>
            <p className="mx-auto mt-4 max-w-6xl font-unbounded text-base leading-7 text-[#5f6270] dark:text-slate-400">
              Manage every candidate who applied for this role, review their
              profile, and move the right talent forward with confidence.
            </p>
          </div>

          {/* Main Layout */}
          <div className="grid items-end gap-6 py-0 lg:grid-cols-[180px_1fr_1fr]">
            {/* Left Column */}
            <div className="hidden space-y-8 lg:block">
              <div className="space-y-3">
                {[
                  "Total Applicants",
                  "Shortlisted",
                  "Interviewing",
                  "Hired",
                ].map((item) => (
                  <div
                    key={item}
                    className="w-fit rounded-full bg-[#f3f1ff] px-4 py-1.5 font-unbounded text-sm font-medium text-[#2f2b3a] dark:bg-white/10 dark:text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="w-35 rounded-md border border-[#8b5cf6]/35 bg-white p-4 dark:bg-[#0b0b12]">
                <p className="text-2xl font-semibold text-[#2f2b3a] dark:text-white">
                  {applicants?.length || 0}
                </p>

                <p className="mt-1 font-unbounded text-xs text-[#2f2b3a] dark:text-slate-400">
                  <Highlighter action="underline" color="orange">
                    Total Applicants
                  </Highlighter>
                </p>
              </div>

              <button className="flex items-center gap-2 rounded-md bg-[#7047ff] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#5f35f5]">
                View all
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Center Column */}
            <div className="space-y-5">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Recruiter reviewing applicants"
                className="h-[180px] w-full rounded-[18px] object-cover"
              />

              <div className="relative overflow-hidden rounded-[18px] bg-[#E6EEC9] p-6 text-black">
                <h2 className="font-unbounded text-xl font-bold">
                  Explore Top Applicants
                </h2>

                <button className="mt-12 rounded-full border border-white/70 px-4 py-1.5 font-mont text-xs font-medium">
                  View All Details
                </button>

                <ArrowRight className="absolute top-6 right-6 h-6 w-6" />

                <div className="absolute right-0 -bottom-24 h-48 w-48 rounded-full border-14 border-black/20" />
                <div className="absolute right-10 -bottom-16 h-36 w-36 rounded-full border-14 border-red-400/20" />
                <div className="absolute right-20 -bottom-8 h-24 w-24 rounded-full border-14 border-green-600/20" />
              </div>
            </div>

            {/* Right Column */}
            <div className="relative isolate rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
                alt="Recruitment workspace"
                className="h-90 w-full rounded-[28px] object-cover"
              />

              <div className="absolute inset-0 z-10 rounded-[28px] bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-7">
                <div className="max-w-md rounded-[24px] border border-white/15 bg-black/30 p-5 text-white shadow-2xl backdrop-blur-md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-unbounded text-[11px] font-semibold tracking-[0.22em] text-orange-200 uppercase">
                        <Highlighter action="underline" color="red">
                          Applicants Overview
                        </Highlighter>
                      </p>

                      <h3 className="mt-2 font-unbounded text-2xl font-semibold tracking-tight text-indigo-300">
                        Discover candidates ready to join your team
                      </h3>

                      <p className="mt-2 font-mont text-sm leading-6 text-white/75">
                        Review applications, explore candidate profiles, and
                        identify the right talent for your hiring pipeline.
                      </p>
                    </div>
                    <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">
                      <ChevronUp className="h-4 w-4 rotate-45" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ApplicantsTable />
      </section>
    </>
  )
}

export default ApplicantsPage
