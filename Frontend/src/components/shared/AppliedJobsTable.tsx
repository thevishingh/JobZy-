import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../ui/badge"

export default function AppliedJobsTable() {
  return (
    <section className="bg-bottom py-10">
      <Card className="mx-auto mt-8 max-w-7xl rounded-3xl border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="font-mont text-lg">
            Your Applications Overview
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-175 border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-left">
                  <th className="px-4 py-3 font-mont text-sm font-semibold text-gray-600">
                    No.
                  </th>
                  <th className="px-4 py-3 font-mont text-sm font-semibold text-gray-600">
                    Company
                  </th>
                  <th className="px-4 py-3 font-mont text-sm font-semibold text-gray-600">
                    Job Role
                  </th>
                  <th className="px-4 py-3 font-mont text-sm font-semibold text-gray-600">
                    Applied On
                  </th>
                  <th className="px-4 py-3 font-mont text-sm font-semibold text-gray-600">
                    Status
                  </th>
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
                    className="border-b border-gray-100 transition hover:bg-gray-50"
                  >
                    <td className="px-4 py-4 font-mont text-sm text-gray-700">
                      {index + 1}
                    </td>

                    <td className="px-4 py-4 font-mont text-sm font-medium text-gray-900">
                      {job.company}
                    </td>

                    <td className="px-4 py-4 font-mont text-sm text-gray-600">
                      {job.role}
                    </td>

                    <td className="px-4 py-4 font-mont text-sm text-gray-500">
                      {new Date(job.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>

                    <td className="px-4 py-4">
                      <Badge
                        className={`rounded-full px-3 py-1 font-mont text-xs ${
                          job.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : job.status === "Reviewed"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
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
