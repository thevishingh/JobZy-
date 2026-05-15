import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../ui/badge"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import { Highlighter } from "../ui/highlighter"

export default function AppliedJobsTable() {
  // getting all applied jobs
  const { allAppliedJobs = [] } = useSelector((store: RootState) => store.job)

  return (
    <section className="bg-[#fbf7ef] px-4 py-10 sm:px-6 lg:px-8 dark:bg-[#050509]">
      <Card className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border-slate-200 bg-white shadow-xl shadow-orange-500/10 dark:border-white/10 dark:bg-[#111118] dark:shadow-black/40">
        <CardHeader className="border-b border-slate-200 px-5 py-6 sm:px-6 dark:border-white/10">
          <div>
            <CardTitle className="font-unbounded text-xl font-bold text-[#393629] dark:text-white">
              <Highlighter action="underline" color="green">
                Your Applications Overview
              </Highlighter>
            </CardTitle>

            <p className="mt-2 py-2 font-unbounded text-sm text-[#6b6658] dark:text-slate-400">
              Track the jobs you’ve applied for and monitor your &nbsp;
              <Highlighter action="underline" color="orange">
                hiring progress.
              </Highlighter>
            </p>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-237.5 border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-[#fbf7ef] text-left dark:border-white/10 dark:bg-[#050509]">
                  {["No.", "Company", "Job Role", "Applied On", "Status"].map(
                    (head) => (
                      <th
                        key={head}
                        className="px-5 py-4 font-unbounded text-xs font-bold tracking-[0.16em] text-[#6b6658] uppercase dark:text-slate-400"
                      >
                        {head}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {allAppliedJobs.length > 0 ? (
                  allAppliedJobs.map((application: any, index: number) => (
                    <tr
                      key={application._id}
                      className="border-b border-slate-100 transition hover:bg-orange-50/60 dark:border-white/10 dark:hover:bg-white/4"
                    >
                      <td className="px-5 py-5 font-mont text-sm font-semibold text-[#393629] dark:text-white">
                        #{index + 1}
                      </td>

                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <div className="shrink-0">
                            <img
                              src={
                                application?.job?.company?.logo ||
                                "https://ui-avatars.com/api/?name=Company"
                              }
                              alt={application?.job?.company?.name}
                              className="h-11 w-11 rounded-xl border border-slate-200 object-cover dark:border-white/10"
                            />
                          </div>

                          <div className="min-w-0">
                            <p className="truncate font-unbounded text-sm font-semibold text-[#393629] dark:text-white">
                              {application?.job?.company?.name ||
                                "Unknown Company"}
                            </p>

                            <p className="mt-1 truncate font-mont text-xs text-[#6b6658] dark:text-slate-500">
                              Hiring partner
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-5 font-mont text-sm text-[#6b6658] dark:text-slate-400">
                        {application?.job?.title || "N/A"}
                      </td>

                      <td className="px-5 py-5 font-unbounded text-sm text-[#6b6658] dark:text-slate-400">
                        {application?.createdAt
                          ? new Date(application.createdAt).toLocaleDateString(
                              "en-IN",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )
                          : "N/A"}
                      </td>

                      <td className="px-5 py-5">
                        <Badge
                          className={`rounded-full px-3 py-1 font-unbounded text-xs capitalize ${
                            application?.status === "pending"
                              ? "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300"
                              : application?.status === "accepted"
                                ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                                : "bg-rose-500/10 text-rose-700 dark:text-rose-300"
                          }`}
                        >
                          {application?.status || "pending"}
                        </Badge>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="h-32 text-center font-unbounded text-sm text-[#6b6658] dark:text-slate-400"
                    >
                      No applied jobs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
