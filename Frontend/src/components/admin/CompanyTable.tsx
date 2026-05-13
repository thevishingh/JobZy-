import {
  MoreHorizontal,
  Pencil,
  Trash2,
  Building2,
  MapPin,
  Globe,
} from "lucide-react"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import { useNavigate } from "react-router-dom"

type Company = {
  _id: string
  name: string
  description?: string
  website?: string
  location?: string
  logo?: string
  userId: string
  createdAt: string
  updatedAt: string
}

type CompanyTableProps = {
  searchQuery: string
  filterOption: string
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export default function CompanyTable({
  searchQuery,
  filterOption,
}: CompanyTableProps) {
  // navigation
  const navigate = useNavigate()

  // All company data fetching
  const companies = useSelector(
    (store: RootState) => store.company.allCompanies
  ) as Company[]

  // Apply search and filter
  const filteredCompanies = [...companies]
    .filter((company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (filterOption === "recent") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }

      if (filterOption === "oldest") {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      }

      if (filterOption === "a-z") {
        return a.name.localeCompare(b.name)
      }

      if (filterOption === "z-a") {
        return b.name.localeCompare(a.name)
      }

      return 0
    })

  // main render
  return (
    <div className="rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111118]">
      <div className="mb-5 flex flex-col gap-2 border-b border-slate-200 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-5 dark:border-white/10">
        <div>
          <h2 className="font-unbounded text-lg font-semibold text-[#393629] dark:text-white">
            Registered Companies
          </h2>

          <p className="font-mont text-sm text-[#6b6658] dark:text-slate-400">
            Manage recruiter-created company profiles on Jobzy
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-b-2xl">
        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[900px] text-left">
            <thead className="border-b border-slate-200 bg-[#f8f5ef] dark:border-white/10 dark:bg-[#0b0b10]">
              <tr>
                {[
                  "Company",
                  "Website",
                  "Location",
                  "Recruiter ID",
                  "Created",
                  "Actions",
                ].map((head) => (
                  <th
                    key={head}
                    className={`px-4 py-4 font-mont text-xs font-bold tracking-[0.15em] text-[#6b6658] uppercase dark:text-slate-400 ${
                      head === "Actions" ? "text-right" : ""
                    }`}
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-white/10">
              {filteredCompanies.map((company) => (
                <tr
                  key={company._id}
                  className="transition hover:bg-[#f8f5ef] dark:hover:bg-white/[0.03]"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-[#f8f5ef] dark:border-white/10 dark:bg-[#050509]">
                        {company.logo ? (
                          <img
                            src={company.logo}
                            alt={company.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <Building2 className="h-5 w-5 text-orange-500" />
                        )}
                      </div>

                      <div>
                        <h3 className="font-unbounded text-sm font-semibold text-[#393629] dark:text-white">
                          {company.name}
                        </h3>

                        <p className="max-w-xs truncate font-mont text-sm text-[#6b6658] dark:text-slate-400">
                          {company.description || "No description provided"}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    {company.website ? (
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mont text-sm font-medium text-orange-600 dark:text-orange-300"
                      >
                        <Globe className="h-4 w-4" />
                        Website
                      </a>
                    ) : (
                      <span className="font-mont text-sm text-slate-400">
                        Not added
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-2 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                      <MapPin className="h-4 w-4 text-orange-500" />
                      {company.location || "Not added"}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <span className="block max-w-[150px] truncate rounded-lg bg-[#f8f5ef] px-2 py-1 font-mono text-xs text-[#6b6658] dark:bg-[#050509] dark:text-slate-400">
                      {company.userId}
                    </span>
                  </td>

                  <td className="px-4 py-4 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                    {formatDate(company.createdAt)}
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex justify-end">
                      <div className="group relative">
                        <button className="cursor-pointer rounded-lg p-2 transition hover:bg-[#f8f5ef] dark:hover:bg-white/5">
                          <MoreHorizontal className="h-5 w-5 text-[#6b6658] dark:text-slate-300" />
                        </button>

                        <div className="invisible absolute top-10 right-0 z-20 w-40 rounded-xl border border-slate-200 bg-white p-1 opacity-0 transition-all group-hover:visible group-hover:opacity-100 dark:border-white/10 dark:bg-[#181820]">
                          <button
                            className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 font-mont text-sm text-[#393629] hover:bg-[#f8f5ef] dark:text-white dark:hover:bg-white/5"
                            onClick={() =>
                              navigate(
                                `/admin/companies/details-update/${company._id}`
                              )
                            }
                          >
                            <Pencil className="h-4 w-4" />
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="divide-y divide-slate-100 md:hidden dark:divide-white/10">
          {companies.map((company) => (
            <div key={company._id} className="p-4">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-[#f8f5ef] dark:border-white/10 dark:bg-[#050509]">
                    {company.logo ? (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Building2 className="h-5 w-5 text-orange-500" />
                    )}
                  </div>

                  <div>
                    <h3 className="font-mont text-sm font-semibold text-[#393629] dark:text-white">
                      {company.name}
                    </h3>

                    <p className="line-clamp-2 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                      {company.description || "No description provided"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 rounded-xl bg-[#f8f5ef] p-3 dark:bg-[#050509]">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mont text-sm text-[#6b6658] dark:text-slate-400">
                    Website
                  </span>

                  {company.website ? (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mont text-sm font-medium text-orange-600 dark:text-orange-300"
                    >
                      Visit
                    </a>
                  ) : (
                    <span className="font-mont text-sm text-slate-400">
                      Not added
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="font-mont text-sm text-[#6b6658] dark:text-slate-400">
                    Location
                  </span>

                  <span className="max-w-[160px] truncate font-mont text-sm font-medium text-[#393629] dark:text-white">
                    {company.location || "Not added"}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="font-mont text-sm text-[#6b6658] dark:text-slate-400">
                    Created
                  </span>

                  <span className="font-mont text-sm font-medium text-[#393629] dark:text-white">
                    {formatDate(company.createdAt)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="font-mont text-sm text-[#6b6658] dark:text-slate-400">
                    Recruiter ID
                  </span>

                  <span className="max-w-37.5 truncate font-mono text-xs text-[#6b6658] dark:text-slate-400">
                    {company.userId}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
