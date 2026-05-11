import {
  MoreHorizontal,
  Pencil,
  Trash2,
  Building2,
  MapPin,
  Globe,
} from "lucide-react"

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

const companies: Company[] = [
  {
    _id: "1",
    name: "Jobzy Technologies",
    description: "Modern hiring platform for recruiters and job seekers.",
    website: "https://jobzy.com",
    location: "Pune, India",
    logo: "https://placehold.co/40x40/F3F4F6/111827?text=J",
    userId: "665f1a2b9c8e4d001234abcd",
    createdAt: "2026-05-10T10:30:00.000Z",
    updatedAt: "2026-05-10T10:30:00.000Z",
  },
  {
    _id: "2",
    name: "HireStack Labs",
    description: "Recruitment solutions for fast-growing startups.",
    website: "https://hirestack.dev",
    location: "Bengaluru, India",
    logo: "https://placehold.co/40x40/DBEAFE/1E3A8A?text=H",
    userId: "665f1a2b9c8e4d005678efgh",
    createdAt: "2026-05-09T08:15:00.000Z",
    updatedAt: "2026-05-09T08:15:00.000Z",
  },
  {
    _id: "3",
    name: "TalentBridge Pvt Ltd",
    description: "Connecting skilled professionals with top employers.",
    website: "https://talentbridge.in",
    location: "Mumbai, India",
    logo: "https://placehold.co/40x40/DCFCE7/166534?text=T",
    userId: "665f1a2b9c8e4d003333aaaa",
    createdAt: "2026-05-08T11:20:00.000Z",
    updatedAt: "2026-05-08T11:20:00.000Z",
  },
  {
    _id: "4",
    name: "NextHire Solutions",
    description: "AI-powered candidate screening and hiring workflows.",
    website: "https://nexthire.io",
    location: "Hyderabad, India",
    logo: "https://placehold.co/40x40/FCE7F3/9D174D?text=N",
    userId: "665f1a2b9c8e4d004444bbbb",
    createdAt: "2026-05-07T09:00:00.000Z",
    updatedAt: "2026-05-07T09:00:00.000Z",
  },
  {
    _id: "5",
    name: "RecruitFlow Systems",
    description: "Streamlined applicant tracking for enterprise teams.",
    website: "https://recruitflow.com",
    location: "Delhi, India",
    logo: "https://placehold.co/40x40/FEF3C7/92400E?text=R",
    userId: "665f1a2b9c8e4d005555cccc",
    createdAt: "2026-05-06T15:45:00.000Z",
    updatedAt: "2026-05-06T15:45:00.000Z",
  },
  {
    _id: "6",
    name: "CareerNest",
    description: "Helping companies build high-performing teams faster.",
    website: "https://careernest.co",
    location: "Chennai, India",
    logo: "https://placehold.co/40x40/E0E7FF/3730A3?text=C",
    userId: "665f1a2b9c8e4d006666dddd",
    createdAt: "2026-05-05T13:10:00.000Z",
    updatedAt: "2026-05-05T13:10:00.000Z",
  },
  {
    _id: "7",
    name: "PeopleGrid Technologies",
    description: "Workforce and hiring analytics for modern organizations.",
    website: "https://peoplegrid.ai",
    location: "Noida, India",
    logo: "https://placehold.co/40x40/FEE2E2/991B1B?text=P",
    userId: "665f1a2b9c8e4d007777eeee",
    createdAt: "2026-05-04T17:25:00.000Z",
    updatedAt: "2026-05-04T17:25:00.000Z",
  },
  {
    _id: "8",
    name: "SkillSync Ventures",
    description: "Matching talent with the right opportunities at scale.",
    website: "https://skillsync.io",
    location: "Ahmedabad, India",
    logo: "https://placehold.co/40x40/ECFCCB/365314?text=S",
    userId: "665f1a2b9c8e4d008888ffff",
    createdAt: "2026-05-03T10:05:00.000Z",
    updatedAt: "2026-05-03T10:05:00.000Z",
  },
  {
    _id: "9",
    name: "WorkSpring India",
    description: "A collaborative hiring platform for growing businesses.",
    website: "https://workspring.in",
    location: "Kolkata, India",
    logo: "https://placehold.co/40x40/CFFAFE/155E75?text=W",
    userId: "665f1a2b9c8e4d009999aaaa",
    createdAt: "2026-05-02T12:40:00.000Z",
    updatedAt: "2026-05-02T12:40:00.000Z",
  },
  {
    _id: "10",
    name: "BrightPath Careers",
    description: "Recruitment and employer branding tools in one place.",
    website: "https://brightpathcareers.com",
    location: "Jaipur, India",
    logo: "https://placehold.co/40x40/FAE8FF/86198F?text=B",
    userId: "665f1a2b9c8e4d001010bbbb",
    createdAt: "2026-05-01T14:55:00.000Z",
    updatedAt: "2026-05-01T14:55:00.000Z",
  },
  {
    _id: "11",
    name: "HireOrbit",
    description: "Smart recruitment workflows for distributed teams.",
    website: "https://hireorbit.com",
    location: "Indore, India",
    logo: "https://placehold.co/40x40/F1F5F9/0F172A?text=H",
    userId: "665f1a2b9c8e4d001111cccc",
    createdAt: "2026-04-30T09:35:00.000Z",
    updatedAt: "2026-04-30T09:35:00.000Z",
  },
  {
    _id: "12",
    name: "TalentForge",
    description: "Building stronger hiring pipelines for tech companies.",
    website: "https://talentforge.dev",
    location: "Surat, India",
    logo: "https://placehold.co/40x40/FFE4E6/BE123C?text=T",
    userId: "665f1a2b9c8e4d001212dddd",
    createdAt: "2026-04-29T16:00:00.000Z",
    updatedAt: "2026-04-29T16:00:00.000Z",
  },
  {
    _id: "13",
    name: "ApplyLink Solutions",
    description: "End-to-end tools for job posting and candidate tracking.",
    website: "https://applylink.co",
    location: "Nagpur, India",
    logo: "https://placehold.co/40x40/FEF9C3/A16207?text=A",
    userId: "665f1a2b9c8e4d001313eeee",
    createdAt: "2026-04-28T11:12:00.000Z",
    updatedAt: "2026-04-28T11:12:00.000Z",
  },
  {
    _id: "14",
    name: "RecruitNest Pro",
    description: "Hiring dashboards and automation for recruiters.",
    website: "https://recruitnestpro.com",
    location: "Lucknow, India",
    logo: "https://placehold.co/40x40/D1FAE5/065F46?text=R",
    userId: "665f1a2b9c8e4d001414ffff",
    createdAt: "2026-04-27T18:22:00.000Z",
    updatedAt: "2026-04-27T18:22:00.000Z",
  },
  {
    _id: "15",
    name: "ZenHire Works",
    description: "Simple and scalable company hiring management tools.",
    website: "https://zenhireworks.com",
    location: "Coimbatore, India",
    logo: "https://placehold.co/40x40/EDE9FE/5B21B6?text=Z",
    userId: "665f1a2b9c8e4d001515gggg",
    createdAt: "2026-04-26T07:50:00.000Z",
    updatedAt: "2026-04-26T07:50:00.000Z",
  },
]

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export default function CompanyTable() {
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
              {companies.map((company) => (
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
                          <button className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 font-mont text-sm text-[#393629] hover:bg-[#f8f5ef] dark:text-white dark:hover:bg-white/5">
                            <Pencil className="h-4 w-4" />
                            Edit
                          </button>

                          <button className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 font-mont text-sm text-red-600 hover:bg-red-50 dark:text-red-300 dark:hover:bg-red-500/10">
                            <Trash2 className="h-4 w-4" />
                            Delete
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

                  <span className="max-w-[150px] truncate font-mono text-xs text-[#6b6658] dark:text-slate-400">
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
