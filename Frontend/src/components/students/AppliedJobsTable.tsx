import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../ui/badge"

export default function AppliedJobsTable() {
  return (
    <section className="bg-[#fbf7ef] px-4 py-10 dark:bg-[#050509] sm:px-6 lg:px-8">
      <Card className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border-slate-200 bg-white shadow-xl shadow-orange-500/10 dark:border-white/10 dark:bg-[#111118] dark:shadow-black/40">
        <CardHeader className="border-b border-slate-200 px-5 py-6 dark:border-white/10 sm:px-6">
          <div>
            <CardTitle className="font-unbounded text-xl font-bold text-[#393629] dark:text-white">
              Your Applications Overview
            </CardTitle>

            <p className="mt-2 font-mont text-sm text-[#6b6658] dark:text-slate-400">
              Track the jobs you’ve applied for and monitor your hiring progress.
            </p>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-[#fbf7ef] text-left dark:border-white/10 dark:bg-[#050509]">
                  {["No.", "Company", "Job Role", "Applied On", "Status"].map(
                    (head) => (
                      <th
                        key={head}
                        className="px-5 py-4 font-unbounded text-xs font-bold uppercase tracking-[0.16em] text-[#6b6658] dark:text-slate-400"
                      >
                        {head}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    company: "Google",
                    role: "Frontend Developer",
                    status: "Pending",
                    date: "2026-05-01",
                  },
                  {
                    company: "Microsoft",
                    role: "React Developer",
                    status: "Reviewed",
                    date: "2026-04-28",
                  },
                  {
                    company: "Infosys",
                    role: "Software Engineer",
                    status: "Rejected",
                    date: "2026-04-20",
                  },
                ].map((job, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 transition hover:bg-orange-50/60 dark:border-white/10 dark:hover:bg-white/4"
                  >
                    <td className="px-5 py-5 font-mont text-sm font-semibold text-[#393629] dark:text-white">
                      #{index + 1}
                    </td>

                    <td className="px-5 py-5">
                      <div>
                        <p className="font-unbounded text-sm font-semibold text-[#393629] dark:text-white">
                          {job.company}
                        </p>
                        <p className="mt-1 font-mont text-xs text-[#6b6658] dark:text-slate-500">
                          Hiring partner
                        </p>
                      </div>
                    </td>

                    <td className="px-5 py-5 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                      {job.role}
                    </td>

                    <td className="px-5 py-5 font-unbounded text-sm text-[#6b6658] dark:text-slate-400">
                      {new Date(job.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>

                    <td className="px-5 py-5">
                      <Badge
                        className={`rounded-full font-unbounded px-3 py-1 text-xs ${job.status === "Pending"
                            ? "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300"
                            : job.status === "Reviewed"
                              ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                              : "bg-rose-500/10 text-rose-700 dark:text-rose-300"
                          }`}
                      >
                        {job.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
