import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import {
  Briefcase,
  Building2,
  CalendarDays,
  IndianRupee,
  MapPin,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react"

export default function JobsDetails() {
  const isApplied = false
  return (
    <section className="min-h-screen bg-top px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Content */}
          <div className="space-y-6 lg:col-span-2">
            <Card className="rounded-3xl border-gray-200 shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="rounded-full px-3 py-1"
                      >
                        Full Time
                      </Badge>
                      <Badge className="rounded-full bg-red-100 px-3 py-1 text-red-700 hover:bg-red-100">
                        Urgent Hiring
                      </Badge>
                    </div>

                    <h1 className="font-mont text-3xl font-bold text-gray-900 sm:text-4xl">
                      Frontend Developer
                    </h1>

                    <div className="mt-4 flex flex-wrap items-center gap-4 font-mont text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-red-500" />
                        JobZy Technologies
                      </span>

                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-red-500" />
                        Mumbai, India
                      </span>
                    </div>
                  </div>
                  <Button
                    disabled={isApplied}
                    className={`rounded-full px-8 py-6 font-mont transition ${
                      isApplied
                        ? "cursor-not-allowed bg-green-300 text-black"
                        : "bg-black text-white cursor-pointer hover:bg-gray-800"
                    }`}
                  >
                    {isApplied ? "Already Applied" : "Apply Now"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="font-mont text-xl">
                  Job Description
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 font-mont text-sm leading-7 text-gray-600">
                <p>
                  We are looking for a skilled Frontend Developer who can build
                  modern, responsive, and user-friendly web interfaces. The
                  ideal candidate should have strong experience with React,
                  Tailwind CSS, component-based architecture, and clean UI
                  implementation.
                </p>

                <p>
                  You will work closely with designers, backend developers, and
                  product teams to deliver high-quality features for users and
                  recruiters.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="font-mont text-xl">
                  Responsibilities
                </CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Build responsive user interfaces using React and Tailwind CSS.",
                    "Convert designs into clean and reusable components.",
                    "Integrate REST APIs and manage frontend state.",
                    "Improve performance, accessibility, and user experience.",
                    "Collaborate with team members to ship production-ready features.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 font-mont text-sm text-gray-600"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="font-mont text-xl">
                  Required Skills
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Tailwind CSS",
                    "JavaScript",
                    "TypeScript",
                    "Redux Toolkit",
                    "REST API",
                    "Responsive Design",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      className="rounded-full bg-[#e2cbfb] px-4 py-2 font-mont text-sm text-red-700 hover:bg-red-50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <Card className="rounded-3xl border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="font-mont text-xl">
                  Job Overview
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <OverviewItem
                  icon={Briefcase}
                  label="Job Type"
                  value="Full Time"
                />
                <OverviewItem
                  icon={IndianRupee}
                  label="Salary"
                  value="6 - 10 LPA"
                />
                <OverviewItem
                  icon={Users}
                  label="Positions"
                  value="4 Openings"
                />
                <OverviewItem
                  icon={Clock}
                  label="Experience"
                  value="1 - 3 Years"
                />
                <OverviewItem
                  icon={CalendarDays}
                  label="Posted On"
                  value="4 May 2026"
                />
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="font-mont text-xl">
                  Company Info
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                    <Building2 className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="font-mont text-base font-semibold text-gray-900">
                      JobZy Technologies
                    </h3>
                    <p className="font-mont text-sm text-gray-500">
                      Software Company
                    </p>
                  </div>
                </div>

                <Separator className="my-5" />

                <p className="font-mont text-sm leading-6 text-gray-600">
                  A modern hiring platform helping candidates find better
                  opportunities and companies hire the right talent faster.
                </p>

                <Button
                  variant="outline"
                  className="mt-5 w-full rounded-full font-mont"
                >
                  View Company
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-gray-200 bg-black text-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-mont text-xl font-semibold">
                  Ready to apply?
                </h3>
                <p className="mt-2 font-mont text-sm text-gray-300">
                  Submit your application and take the next step in your career.
                </p>

                <Button className="mt-5 w-full rounded-full bg-white font-mont text-black hover:bg-gray-100">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function OverviewItem({
  icon: Icon,
  label,
  value,
}: {
  icon: any
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-red-600 shadow-sm">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <p className="font-mont text-xs text-gray-500">{label}</p>
        <h4 className="font-mont text-sm font-semibold text-gray-900">
          {value}
        </h4>
      </div>
    </div>
  )
}
