import React from "react"
import {
  ArrowRight,
  Building2,
  FilePlus2,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react"
import CompanyTable from "./CompanyTable"
import { useNavigate } from "react-router-dom"

const brandLogos = [
  {
    name: "Airbnb",
    logo: "https://logo.clearbit.com/airbnb.com",
  },
  {
    name: "Stripe",
    logo: "https://logo.clearbit.com/stripe.com",
  },
  {
    name: "Spotify",
    logo: "https://logo.clearbit.com/spotify.com",
  },
  {
    name: "Notion",
    logo: "https://logo.clearbit.com/notion.so",
  },
]

export default function Company() {
  // navigate
  const navigate = useNavigate()
  return (
    <section className="mx-auto my-10 w-full px-4 sm:px-6 md:my-16 lg:my-24 lg:px-8">
      {/* Hero Section */}
      <div className="relative mb-10 overflow-hidden rounded-[2rem] p-5 shadow-sm sm:p-8 lg:p-10">
        <div className="absolute -top-16 -right-16 h-52 w-52 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-red-200/40 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 font-mont text-sm font-medium text-gray-700 backdrop-blur">
              <Sparkles className="h-4 w-4 text-orange-500" />
              Company Management
            </div>

            <h1 className="font-unbounded text-3xl leading-tight font-bold text-gray-950 sm:text-4xl lg:text-5xl">
              Manage Recruiter Companies With Confidence
            </h1>

            <p className="mt-5 max-w-2xl font-mont text-sm leading-7 text-gray-600 sm:text-base">
              Create, organize, and monitor companies registered on Jobzy. Keep
              company profiles, websites, locations, and recruiter data
              structured in one clean dashboard.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-5 py-3 font-mont text-sm font-semibold text-white transition hover:bg-gray-800">
                <FilePlus2 className="h-4 w-4" />
                Add New Company
                <ArrowRight className="h-4 w-4" />
              </button>

              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 font-mont text-sm font-semibold text-gray-800 transition hover:bg-gray-50">
                <Search className="h-4 w-4" />
                Explore Companies
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/70 bg-white/70 p-4 backdrop-blur">
                <Building2 className="mb-3 h-5 w-5 text-orange-500" />
                <h3 className="font-unbounded text-lg font-semibold text-gray-950">
                  120+
                </h3>
                <p className="font-mont text-sm text-gray-500">
                  Registered companies
                </p>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/70 p-4 backdrop-blur">
                <ShieldCheck className="mb-3 h-5 w-5 text-orange-500" />
                <h3 className="font-unbounded text-lg font-semibold text-gray-950">
                  Verified
                </h3>
                <p className="font-mont text-sm text-gray-500">
                  Recruiter-created profiles
                </p>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/70 p-4 backdrop-blur">
                <Sparkles className="mb-3 h-5 w-5 text-orange-500" />
                <h3 className="font-unbounded text-lg font-semibold text-gray-950">
                  Smart
                </h3>
                <p className="font-mont text-sm text-gray-500">
                  Jobzy company records
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image/Card */}
          <div className="rounded-[1.7rem] border border-white/70 bg-white/80 p-4 shadow-xl backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
              alt="Professional team managing companies"
              className="h-56 w-full rounded-2xl object-cover sm:h-72 lg:h-80"
            />

            <div className="mt-5">
              <h2 className="font-unbounded text-xl font-semibold text-gray-950">
                Trusted Company Network
              </h2>
              <p className="mt-2 font-mont text-sm leading-6 text-gray-600">
                Manage brands, company details, and recruiter ownership from one
                powerful admin experience.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {brandLogos.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    <span className="font-mont text-xs font-medium text-gray-700">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter + Table Section */}
      <div className="max-w-9xl mx-auto rounded-[2rem] border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-unbounded text-xl font-semibold text-gray-950 sm:text-2xl">
              Listed Companies
            </h2>
            <p className="mt-1 font-mont text-sm text-gray-500">
              View, filter, and manage companies available on Jobzy.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5">
              <SlidersHorizontal className="h-4 w-4 text-gray-500" />
              <select
                id="companyFilter"
                className="w-full bg-transparent font-mont text-sm text-gray-700 outline-none sm:w-44"
              >
                <option value="">All Companies</option>
                <option value="recent">Recently Added</option>
                <option value="oldest">Oldest First</option>
                <option value="a-z">Name A-Z</option>
                <option value="z-a">Name Z-A</option>
              </select>
            </div>

            <button
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-950 px-5 py-2.5 font-mont text-sm font-semibold text-white transition hover:bg-gray-800 cursor-pointer sm:w-auto"
              onClick={() => navigate("/admin/companies/new")}
            >
              <FilePlus2 className="h-4 w-4" />
              Add Company
            </button>
          </div>
        </div>

        <CompanyTable />
      </div>
    </section>
  )
}
